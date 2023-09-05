import React from 'react'

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
        <p className='text-2xl font-semibold'>SneakStore</p>
        <div className='flex gap-5 self-center'>
          <p>Register</p>
          <p>Login</p>
          <p>C</p>
        </div>
      </div>
  )
}

export default Navbar