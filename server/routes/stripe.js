import express from 'express';
const router = express.Router();

import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIP_KEY);

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    }, (stripeError, stripeResponse) => {
        if(stripeError){
            res.status(500).json(stripeError);
        } else {
            res.status(200).json(stripeResponse);  
        }
    })
})


export default router;
