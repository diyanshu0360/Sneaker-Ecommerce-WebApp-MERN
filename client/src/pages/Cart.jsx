import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Cart = () => {
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
          <p className='underline font-semibold'>Shopping Bag (2)</p>
          <button className='bg-black text-white p-1 ps-2 pe-2'>CHECKOUT NOW</button>
        </div>
        <div className='flex justify-center gap-16 mt-6 flex-wrap'>
          {/*  */}
          <div>
            <div className='border flex flex-wrap justify-around gap-8 h-max m-3'>
              <div className='self-center w-48 h-48'>
                <img className='w-48 h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgBy5UprFs01Ui1zmpGwA-4AafZ8F6xOGkqaRZmoP1T2xTkhLU9RVoLqLwG-8nHk77zRY&usqp=CAU" alt="" />
              </div>
              <div className='self-center'>
                <p><span className='font-semibold m-1'>Product :</span> Nike Air Jordan</p>
                <p><span className='font-semibold m-1'>ID :</span> 7657628718</p>
                <p className='bg-cyan-50 w-max ps-3 pe-3 font-semibold border text-sm m-1'>Size : M</p>
              </div>
              <div className='self-center ps-10 pe-10'>
                <div className='flex gap-3 m-2'>
                  <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>-</button>
                  <p className='font-semibold w-7 h-7 text-center self-center'>1</p>
                  <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>+</button>
                </div>
                <p className='text-lg font-bold m-2 text-center'>$ 50</p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='border p-10 h-max'>
            <p className='font-semibold m-1 mb-5'>ORDER SUMMARY</p>
            <p className='m-1'>Subtotal <span className='font-semibold'>$80.0</span></p>
            <p className='m-1'>Estimated Shipping <span className='font-semibold'>$5.9</span></p>
            <p className='m-1'>Shipping Discount <span className='font-semibold'>-$5.9</span></p>
            <p className='m-1 font-semibold text-xl'>Total <span className='font-bold'>$80.0</span></p>
            <button className='m-1 mt-5 bg-black text-white p-1 ps-2 pe-2'>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart