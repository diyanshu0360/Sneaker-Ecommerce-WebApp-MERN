import express from 'express';
import Cart from '../models/Cart.js';
import verifyTokenAndAuthorization from './verifyToken.js';
import verifyTokenAndAdmin from './verifyToken.js';
import verifyToken from './verifyToken.js';
const router = express.Router();

// CREATE
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
       await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET USER CART
router.get('/find/:userId', async (req, res) => {
    try {
    const cart = await Cart.findOne({ userId: req.params.userId});
        res.status(200).json(cart);  
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET CART OF ALL USERS
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
})

export default router;
