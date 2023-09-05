import React from 'react'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <div className='container mx-auto p-8'>
      <div className='mt-10 mb-16'>
        <p className='text-xl md:text-3xl font-bold w-fit md:w-[600px] mt-5 mb-5'>DISCOVER THE STORY BEHIND OUR BRAND AND OUR DEDICATION</p>
        <p className='text-slate-700 mt-5 mb-5 md:w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique iste illum animi blanditiis, laborum, impedit facere autem incidunt cum est, praesentium aut aperiam.</p>
      </div>
      <div className='flex justify-evenly flex-wrap mt-16 mb-10'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Products