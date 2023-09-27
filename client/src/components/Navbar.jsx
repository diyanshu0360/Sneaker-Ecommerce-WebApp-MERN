import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className='bg-black text-white flex p-1 justify-between ps-10 pe-10'>
        <div className='self-center flex gap-3 text-sm'>
          <select className='border text-black'>
            <option value="">ENG</option>
            <option value="">HIN</option>
            <option value="">GUJ</option>
          </select>
          <input className='border ps-3' type="text" placeholder='Search' />
        </div>
        <Link to={"/"} ><p className='text-2xl font-semibold'>SneakStore</p></Link>
        <div className='flex gap-5 self-center'>
          <p>Register</p>
          <p>Login</p>
          <Link to="/cart">C</Link>
        </div>
      </div>
  )
}

export default Navbar