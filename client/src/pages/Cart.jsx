import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from "react-redux";
import { userRequest } from "../requestMethods.js";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from 'react-router-dom';
const KEY = 'pk_test_51Nv3MYSDpr6Fpn6CGc8ykxIYKvc4WxtcYhpAfQJvG3tPXgP24u4cGv4Oe4rTrth7hWAfhObceRWT9AdgU2kgytBT004ZE806ho'


const Cart = () => {

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("http://localhost:5002/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        navigate("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate]);


  const CartSingleItem = ({ item }) => {
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
            <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>-</button>
            <p className='font-semibold w-7 h-7 text-center self-center'>{item.quantity}</p>
            <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>+</button>
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
          <p className='underline font-semibold'>Shopping Bag ({cart.products.length})</p>
          <button className='bg-black text-white p-1 ps-2 pe-2'>CHECKOUT NOW</button>
        </div>
        <div className='flex justify-center gap-16 mt-6 flex-wrap'>
          {/*  */}
          <div>
            {cart.products.map((item, index) => (
              <CartSingleItem
                key={index}
                item={item}
              />
            ))}
          </div>
          {/*  */}
          {cart.products.length > 0 &&
            <div className='border p-10 h-max'>
              <p className='font-semibold m-1 mb-5'>ORDER SUMMARY</p>
              <p className='m-1'>Subtotal <span className='font-semibold'>${cart.total}</span></p>
              <p className='m-1'>Estimated Shipping <span className='font-semibold'>$5.9</span></p>
              <p className='m-1'>Shipping Discount <span className='font-semibold'>-$5.9</span></p>
              <p className='m-1 font-semibold text-xl'>Total <span className='font-bold'>${cart.total}</span></p>
              {
                KEY &&
                <StripeCheckout
                  name="SneakStore Online Shopping"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-aS7LM1vyINVb3U6CaluWqh0NzzZR9BZtg&usqp=CAU"
                  billingAddress
                  shippingAddress
                  description={`Your total is $${cart.total}`}
                  amount={cart.total * 100}
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