import React from 'react'
import { Link } from "react-router-dom";

const CategoryItem = ({item}) => {
  return (
    <Link to={`/products/${item.cat}`} >
    <div className='bg-white container mx-auto md:flex w-80 md:w-[800px] rounded-2xl border border-white m-5'>
      <div className='w-80 h-72'> 
        <img className='w-80 h-72 rounded-t-2xl md:rounded-2xl' src={item.img} alt="" />
      </div>
      <div className='self-center mx-auto text-sm mt-5 mb-5'>
        <p className='text-3xl font-bold m-2'>{item.title}</p>
        <p className='text-slate-700 m-2 w-80'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, velit in! Qui, perspiciatis nobis?</p>
        <button className='bg-yellow-400 m-2 ps-1 pe-1 rounded-md'>BUY NOW</button>
      </div>
    </div>
    </Link>
  )
}

export default CategoryItem