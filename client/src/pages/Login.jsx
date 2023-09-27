import React from 'react';
import shoeImg from '../images/shoes_login_register.jpg';

const Login = () => {
  return (
    <div className='flex justify-center h-screen p-16 bg-slate-100'>
      <div className='border self-center p-16 bg-white'>
        <img className='w-40' src={shoeImg} alt="" />
        <p className='text-2xl font-semibold m-3 mb-1'>Welcome back!</p>
        <p className='text-slate-700 text-sm m-3 mt-1'>Please enter your details</p>
        <div className='flex flex-col'>
          <input className='border border-black p-1 m-3 w-60 ps-3' type="email" placeholder='Enter Email : ' />
          <input className='border border-black p-1 m-3 w-60 ps-3' type="password" placeholder='Enter Password : ' />
          <button className='bg-black text-white p-1 m-3 mb-2'>Log In</button>
          <button className='bg-slate-100 p-1 m-3 mt-2'>Log In with Google</button>
        </div>
        <p className='text-sm text-center m-3'>Don't have an account? <span className='font-semibold text-blue-500 underline'>Sign Up</span></p>
      </div>
    </div>
  )
}

export default Login