import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user details from localStorage
    localStorage.removeItem('user');
    setUser(null);
    navigate("/login")
    window.location.reload();
  };

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
          {user ? (
          <>
            <p className='font-semibold underline'>{user.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/register"><p>Register</p></Link>
            <Link to="/login"><p>Login</p></Link>
          </>
        )}
          <Link to="/cart">C</Link>
        </div>
      </div>
  )
}

export default Navbar