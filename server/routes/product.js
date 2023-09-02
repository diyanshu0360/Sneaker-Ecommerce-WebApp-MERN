import express from 'express';
import Product from '../models/Product.js';
import verifyTokenAndAdmin from './verifyToken.js';
import verifyTokenAndAuthorization from './verifyToken.js';
const router = express.Router();

// CREATE
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
       await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET
router.get('/find/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);  
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL
router.get('/', async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        let products
        if(queryNew){
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if(queryCategory){
            products = await Product.find({
                categories: {
                    $in: [queryCategory]
                }
            })
        } else {
            products = await Product.find();
        }
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json(error);
    }
})


export default router;