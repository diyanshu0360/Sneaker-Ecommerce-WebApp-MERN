import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div>
      <div className='bg-black text-white p-3 ps-16'>
        <p className='text-2xl font-semibold'>CHOOSE YOUR CATEGORY</p>
      </div>
      <div className='bg-slate-100 p-10'>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  )
}

export default Categories