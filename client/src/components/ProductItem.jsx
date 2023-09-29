import React from 'react'
import { Link } from "react-router-dom";

const ProductItem = ({item}) => {
  return (
    <div className='border border-slate-400 w-max m-3'>
      <Link to={`/product/${item._id}`}>
      <div className='w-44 h-48'>
        <img className='w-44 h-48' src={item.img} alt="No Img Found" />
      </div>
      <div className='w-44 text-[13px]'>
        <p className='font-semibold mt-2 mb-2 m-1'>{item.title}</p>
        <p className='font-semibold text-slate-600 mt-2 mb-2 m-1'>{item.categories[0]}'s Shoes</p>
        <p className='font-bold mt-2 mb-2 m-1'>${item.price}</p>
      </div>
      </Link>
    </div>
  )
}

export default ProductItem