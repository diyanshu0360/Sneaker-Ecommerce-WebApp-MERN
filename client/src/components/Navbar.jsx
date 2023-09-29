import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const persistRoot = JSON.parse(localStorage.getItem('persist:root'));
  const userJSON = JSON.parse(persistRoot.user)
  const [user, setUser] = useState(userJSON.currentUser == null ? false : true);
  const navigate = useNavigate();

  const handleLogout = () => {
    const persistRoot = JSON.parse(localStorage.getItem('persist:root'));

    if (persistRoot && persistRoot.user) {
      delete persistRoot.user;
      localStorage.setItem('persist:root', JSON.stringify(persistRoot));
    }
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