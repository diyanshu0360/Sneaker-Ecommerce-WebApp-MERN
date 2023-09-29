import React, { useEffect, useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from "react-router";
import { publicRequest } from "../requestMethods.js";
import { addProduct } from "../apirequests/cartRedux";
import { useDispatch } from "react-redux";


const ProductInfo = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("http://localhost:5002/api/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  };

  return (
    <div>
      <Announcement />
      <Navbar />
      <div className='md:flex p-10 md:justify-center container mx-auto'>
        <div className='md:w-[40vw] flex justify-center border-2 border-b-0 md:border-b-2'>
          <img className='w-96 md:w-[40vw] h-96 self-center mt-5 md:mt-0' src={product.img} alt="" />
        </div>
        <div className='md:w-[40vw] border-2 ps-16 pe-16 p-10 border-t-0 md:border-t-2'>
          <div>
            <p className='text-xl font-semibold m-1'>{product.title}</p>
            <p className='text-sm text-slate-700 m-1'>{product.desc}</p>
            <p className='text-xl font-bold m-1 mt-5 mb-5'>${product.price}</p>
          </div>
          <div className='flex gap-3 md:gap-10 m-1 mt-5 mb-3 flex-wrap'>
            <div className='flex gap-2'>
              <p className='self-center'>Color</p>
              {product.color?.map((clr, index) => (
                <button className='rounded-full p-2 w-2 h-2 self-center' key={index} style={{backgroundColor: clr}} onClick={() => setColor(clr)}></button>))
              }
            </div>
            <div className='flex gap-2'>
              <p>Size</p>
              <select className='border w-16 h-6 border-black' onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((sz, index) => (
                  <option className='text-sm' key={index}>{sz}</option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex gap-3 md:gap-10 m-1 mt-3 mb-3 flex-wrap'>
            <div className='flex gap-2'>
              <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center' onClick={() => handleQuantity("dec")}>-</button>
              <p className='font-semibold w-7 h-7 text-center border border-black self-center rounded-full'>{quantity}</p>
              <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center' onClick={() => handleQuantity("inc")}>+</button>
            </div>
            <div>
              <button className='self-center bg-black text-white text-sm p-1 ps-3 pe-3' onClick={handleClick}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductInfo
