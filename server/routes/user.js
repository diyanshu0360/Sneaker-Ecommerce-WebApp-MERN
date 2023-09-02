import express from 'express';
import User from '../models/User.js';
import verifyTokenAndAuthorization from './verifyToken.js';
import verifyTokenAndAdmin from './verifyToken.js';
const router = express.Router();

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
       await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User deleted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
})

// GET
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        const { password, ...others } = user._doc;
        res.status(200).json(others); 

    } catch (error) {
        res.status(500).json(error);
    }
})

// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(3) : await User.find();
        res.status(200).json(users); 

    } catch (error) {
        res.status(500).json(error);
    }
})

// USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
});

export default router;
