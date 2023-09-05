import React from 'react'

const Sliders = () => {
  return (
    <div className='border mb-10'>
      <div className='container mx-auto p-10 flex flex-wrap'>
        <p className='text-6xl font-bold w-96 self-center'>WORLD OF SNEAKERS</p>
        <p className='p-5 ps-0 md:w-[500px] min-[1024px]:p-10 self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam corrupti ex fugiat iusto tempora explicabo eaque, cum facere iure aut fugit quis, facilis, minus consectetur saepe animi accusamus voluptatibus vel? Aut earum modi non!</p>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        <img className='w-72 h-48 mt-2 mb-2' src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg" alt="" />
        <img className='w-72 h-48 mt-2 mb-2' src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg" alt="" />
        <img className='w-72 h-48 mt-2 mb-2' src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg" alt="" />
        <img className='w-72 h-48 mt-2 mb-2' src="https://cdn.pixabay.com/photo/2017/05/25/15/08/jogging-2343558_640.jpg" alt="" />
      </div>
      <div></div>
    </div>
  )
}

export default Sliders