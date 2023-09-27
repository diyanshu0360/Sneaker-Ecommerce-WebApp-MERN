import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from "axios"

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`http://localhost:5002/api/products`);
        setProducts(res.data.slice(0,4));
      } catch (err) { 
        console.log(err)
      }
    };
    getProducts();
  }, []);

  return (
    <div className='container mx-auto p-8'>
      <div className='mt-10 mb-16'>
        <p className='text-xl md:text-3xl font-bold w-fit md:w-[600px] mt-5 mb-5'>DISCOVER THE STORY BEHIND OUR BRAND AND OUR DEDICATION</p>
        <p className='text-slate-700 mt-5 mb-5 md:w-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique iste illum animi blanditiis, laborum, impedit facere autem incidunt cum est, praesentium aut aperiam.</p>
      </div>
      <div className='flex justify-evenly flex-wrap mt-16 mb-10'>
        {
          products.map((item,index) => (
            <ProductItem item={item} key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Products