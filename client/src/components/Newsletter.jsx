import React from 'react'

const NewsLetter = () => {
  return (
    <div className='border p-10 text-center bg-slate-100'>
      <div className='p-3'>
        <p className='text-4xl font-semibold m-2'>Newsletter</p>
        <p className='m-2'>Get timely updates from your favorite products.</p>
      </div>
      <div className='p-3'>
        <input className='border p-1 ps-3 pe-3 w-60 m-1' type="text" placeholder='Enter Email : ' />
        <button className='bg-yellow-400 p-1 border m-1 w-60 min-[561px]:w-max'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter