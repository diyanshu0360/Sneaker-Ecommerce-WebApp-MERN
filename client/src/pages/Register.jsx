import React, { useState } from 'react'
import shoeImg from '../images/shoes_login_register.jpg';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate()

  return (
    <div className='flex justify-center h-screen p-16 bg-slate-100'>
      <div className='border self-center p-16 bg-white'>
        <img className='w-40' src={shoeImg} alt="" />
        <p className='text-2xl font-semibold m-3 mb-1'>Welcome</p>
        <p className='text-slate-700 text-sm m-3 mt-1'>Create an account</p>
        <div className='flex flex-col'>
          <input className='border border-black p-1 m-3 w-60 ps-3' type="text" placeholder='Enter FullName : ' name="username"  />
          <input className='border border-black p-1 m-3 w-60 ps-3' type="email" placeholder='Enter Email : ' name="email"  />
          <input className='border border-black p-1 m-3 w-60 ps-3' type="password" placeholder='Enter Password : ' name="password"  />
          <input className='border border-black p-1 m-3 w-60 ps-3' type="password" placeholder='Enter Confirm Password : ' name="confirmPassword"  />
          <button className='bg-black text-white p-1 m-3 mb-2' >Create</button>
        </div>
        <p className='text-sm text-center m-3'>Already have an account? <span className='font-semibold text-blue-500 underline cursor-pointer' onClick={() => navigate('/login')} >Log In</span></p>
      </div>
    </div>
  )
}

export default Register