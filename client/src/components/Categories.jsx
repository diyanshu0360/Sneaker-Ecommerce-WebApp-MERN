import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from "../data"; 

const Categories = () => {
  return (
    <div>
      <div className='bg-black text-white p-3 ps-16'>
        <p className='text-2xl font-semibold'>CHOOSE YOUR CATEGORY</p>
      </div>
      <div className='bg-slate-100 p-10'>
        {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </div>
    </div>
  )
}

export default Categories