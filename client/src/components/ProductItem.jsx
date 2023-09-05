import React from 'react'

const ProductItem = () => {
  return (
    <div className='border border-slate-400 w-max m-3'>
      <div className='w-44 h-48'>
        <img className='w-44 h-48' src="https://shoplineimg.com/5b796023ae8a3a0011d89929/619784f7c850a00020cae999/800x.png?" alt="" />
      </div>
      <div className='w-44 text-[13px]'>
        <p className='font-semibold mt-2 mb-2 m-1'>Nike Free Teera Vista Nature</p>
        <p className='font-semibold text-slate-600 mt-2 mb-2 m-1'>Men's Shoes</p>
        <p className='font-bold mt-2 mb-2 m-1'>$110</p>
      </div>
    </div>
  )
}

export default ProductItem