import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-slate-200 text-sm p-4'>
      <div className='flex p-5 flex-wrap justify-between md:justify-evenly'>
          <div className='m-3 w-64'>
            <p className='font-bold text-2xl text-white'>SneakStore</p>
            <p>Provide best in class service to our valuable customers.</p>
          </div>
          <div className='m-3'>
            <p className='font-bold text-white'>Product</p>
            <p>Pricing</p>
            <p>Case Studies</p>
            <p>Features</p>
            <p>Reviews</p>
          </div>
          <div className='m-3'>
            <p className='font-bold text-white'>Company</p>
            <p>About</p>
            <p>Careers</p>
            <p>News</p>
            <p>Blog</p>
          </div>
          <div className='m-3'>
            <p className='font-bold text-white'>Legal</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Privacy Request</p>
          </div>
      </div>
      <hr className='bg-slate-200 m-2'></hr>
      <div className='p-5'>
        <span className='text-white'>@ 2023 SneakStore Copyright - All Rights Reserved By Diyanshu, Vivek, Prince</span>
      </div>
    </div>
  )
}

export default Footer