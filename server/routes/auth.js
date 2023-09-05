import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();


// REGISTER
router.post('/register', async (req, res) => {
    try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);      
        
    } catch (error) {
        res.status(500).json(error);
    }
})

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        const isPassword = await bcrypt.compare(req.body.password, user.password);
        
        if(!user || !isPassword) {
            return res.status(500).json("User or password is incorrect!");
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT, { expiresIn: '1h' })

        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken}); 

    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;
