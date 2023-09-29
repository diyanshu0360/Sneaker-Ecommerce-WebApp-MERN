import React, { useState } from 'react'
import shoeImg from '../images/shoes_login_register.jpg';
import { register } from "../apirequests/apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPass] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <div className='flex justify-center h-screen p-16 bg-slate-100'>
      <div className='border self-center p-16 bg-white'>
        <img className='w-40' src={shoeImg} alt="" />
        <p className='text-2xl font-semibold m-3 mb-1'>Welcome</p>
        <p className='text-slate-700 text-sm m-3 mt-1'>Create an account</p>
        <div className='flex flex-col'>
          <input className='border border-black p-1 m-3 w-60 ps-3' type="text" placeholder='Enter FullName : ' name="username" onChange={(e) => setUsername(e.target.value)}/>
          <input className='border border-black p-1 m-3 w-60 ps-3' type="email" placeholder='Enter Email : ' name="email" onChange={(e) => setUseremail(e.target.value)} />
          <input className='border border-black p-1 m-3 w-60 ps-3' type="password" placeholder='Enter Password : ' name="password" onChange={(e) => setPassword(e.target.value)}/>
          <input className='border border-black p-1 m-3 w-60 ps-3' type="password" placeholder='Enter Confirm Password : ' name="confirmPassword" onChange={(e) => setConfirmPass(e.target.value)}/>
          <button className='bg-black text-white p-1 m-3 mb-2' onClick={handleClick} >Create</button>
        </div>
        <p className='text-sm text-center m-3'>Already have an account? <span className='font-semibold text-blue-500 underline cursor-pointer' onClick={() => navigate('/login')} >Log In</span></p>
      </div>
    </div>
  )
}

export default Register