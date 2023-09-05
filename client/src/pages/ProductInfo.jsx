import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductInfo = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className='md:flex p-10 md:justify-center container mx-auto'>
        <div className='md:w-[40vw] flex justify-center border-2 border-b-0 md:border-b-2'>
          <img className='w-96 md:w-[40vw] h-96 self-center mt-5 md:mt-0' src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/5c9072ce-fcc8-494b-9331-af6507c7b8ee/the-6-best-nike-shoes-for-walking.jpg" alt="" />
        </div>
        <div className='md:w-[40vw] border-2 ps-16 pe-16 p-10 border-t-0 md:border-t-2'>
          <div>
            <p className='text-xl font-semibold m-1'>Air Jordon Shoes</p>
            <p className='text-sm text-slate-700 m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus at ab eos mollitia illo, placeat rerum totam accusamus unde, amet corporis id sunt enim aspernatur voluptatibus aperiam, quia facilis quo blanditiis minus aut eligendi? lorem100</p>
            <p className='text-xl font-bold m-1 mt-5 mb-5'>$150</p>
          </div>
          <div className='flex gap-3 md:gap-10 m-1 mt-5 mb-3 flex-wrap'>
            <div className='flex gap-2'>
              <p className='self-center'>Color</p>
              <div className='bg-red-600 rounded-full p-2 w-2 h-2 self-center'></div>
              <div className='bg-yellow-400 rounded-full p-2 w-2 h-2 self-center'></div>
              <div className='bg-green-500 rounded-full p-2 w-2 h-2 self-center'></div>
            </div>
            <div className='flex gap-2'>
              <p>Size</p>
              <select className='border w-16 h-6 border-black'>
                  <option className='text-sm' value="">S</option>
                  <option className='text-sm' value="">M</option>
                  <option className='text-sm' value="">L</option>
                  <option className='text-sm' value="">XL</option>
                </select>
            </div>
          </div>
          <div className='flex gap-3 md:gap-10 m-1 mt-3 mb-3 flex-wrap'>
            <div className='flex gap-2'>
              <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>-</button>
              <p className='font-semibold w-7 h-7 text-center border border-black self-center rounded-full'>1</p>
              <button className='font-bold border bg-black text-white w-7 h-7 rounded-full self-center'>+</button>
            </div>
            <div>
              <button className='self-center bg-black text-white text-sm p-1 ps-3 pe-3'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductInfo