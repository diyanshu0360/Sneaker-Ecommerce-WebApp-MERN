import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useCart } from '../apirequests/CartContext.js';
import { userRequest } from "../apirequests/requestMethod.js";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';
const KEY = 'Check .env File'


const Cart = () => {

  const { cartItems, addToCart, updateCartItemQuantity, removeCartItem } = useCart();
  const [stripeToken, setStripeToken] = useState(null);
  const navigation = useNavigate();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  const totalPrice = calculateTotalPrice()

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigation.navigate("SuccessScreen", {
          stripeData: res.data,
          products: Cart,
        });
      } catch (error) {
        console.error('Error making request:', error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, navigation]);


  const CartSingleItem = ({ item, updateQuantity }) => {

    const handleDecrement = () => {
      updateQuantity(item._id, item.quantity - 1);
    };
    const handleIncrement = () => {
      updateQuantity(item._id, item.quantity + 1);
    };

    return (
      <div className='border flex flex-wrap justify-around gap-8 h-max m-3'>
        <div className='self-center w-48 h-48'>
          <img className='w-48 h-48' src={item.img} alt="" />
        </div>
        <div className='self-center'>
          <p><span className='font-semibold m-1'>Product :</span> {item.title}</p>
          <p><span className='font-semibold m-1'>ID :</span> {item._id}</p>
          <p className='bg-cyan-50 w-max ps-3 pe-3 font-semibold border text-sm m-1'>Size : {item.size}</p>
        </div>
        <div className='self-center ps-10 pe-10'>
          <div className='flex gap-3 m-2'>
            <button onClick={handleDecrement} className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>-</button>
            <p className='font-semibold w-7 h-7 text-center self-center'>{item.quantity}</p>
            <button onClick={handleIncrement} className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>+</button>
          </div>
          <p className='text-lg font-bold m-2 text-center'>$ {item.price}</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className='p-10'>
        <div className='text-center mb-6'>
          <p className='font-semibold text-2xl'>CHECKOUT YOUR BAG</p>
        </div>
        <div className='flex flex-wrap justify-around gap-3 mt-6 mb-6'>
          <button className='bg-black text-white p-1 ps-2 pe-2'>CONTINUE SHOPPING</button>
          <p className='underline font-semibold'>Shopping Bag ({cartItems.length})</p>
          <button className='bg-black text-white p-1 ps-2 pe-2'>CHECKOUT NOW</button>
        </div>
        <div className='flex justify-center gap-16 mt-6 flex-wrap'>
          {/*  */}
          <div>
            {cartItems.map((item, index) => (
              <CartSingleItem
                key={index}
                item={item}
                updateQuantity={(itemId, newQuantity) => {
                  if (newQuantity > 0) {
                    updateCartItemQuantity(itemId, newQuantity);
                  } else {
                    removeCartItem(itemId);
                  }
                }}
              />
            ))}
          </div>
          {/*  */}
          {cartItems.length > 0 &&
            <div className='border p-10 h-max'>
              <p className='font-semibold m-1 mb-5'>ORDER SUMMARY</p>
              <p className='m-1'>Subtotal <span className='font-semibold'>${totalPrice}</span></p>
              <p className='m-1'>Estimated Shipping <span className='font-semibold'>$5.9</span></p>
              <p className='m-1'>Shipping Discount <span className='font-semibold'>-$5.9</span></p>
              <p className='m-1 font-semibold text-xl'>Total <span className='font-bold'>${totalPrice}</span></p>
              {
                KEY &&
                <StripeCheckout
                  name="SneakStore Online Shopping"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-aS7LM1vyINVb3U6CaluWqh0NzzZR9BZtg&usqp=CAU"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${totalPrice}`}
                  amount={totalPrice * 100}
                  token={onToken}
                  stripeKey={KEY}
                >
                  <button className='m-1 mt-5 bg-black text-white p-1 ps-2 pe-2'>CHECKOUT NOW</button>
                </StripeCheckout>
              }
            </div>}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart