import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/Newsletter'
import Footer from '../components/Footer'
import ProductItem from '../components/ProductItem'

const ProductList = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
        <div className='container mx-auto p-10'>
          <div className='font-bold text-2xl m-3'><p>PRODUCTS</p></div>
          <div className='flex justify-between m-3 flex-wrap'>
            <div className='flex gap-3 self-center m-2'>
              <p className='w-28'>Filter Products : </p>
              <select className='border w-16 h-6 border-black'>
                <option value="">Red</option>
                <option value="">Blue</option>
                <option value="">White</option>
                <option value="">Black</option>
              </select>
              <select className='border w-16 h-6 border-black'>
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
              </select>
            </div>
            <div className='flex gap-3 self-center m-2'>
              <p className='w-28'>Filter Products : </p>
              <select className='border h-6 border-black'>
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Best Match</option>
              </select>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly gap-[45px]'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductList