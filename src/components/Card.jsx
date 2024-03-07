import React from 'react';
import img from '../assets/img1.png';

const Card = () => {
  return (
    <div className='flex h-full w-full overflow-hidden rounded-[30px] bg-[#FAF3EA] border border-white text-left shadow-card transition-all duration-200 hover:scale-95 justify-end flex-col min-h-[160px] relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] playfair-display'>
        <img src={img} alt='image1' className=' object-fill'/>
        <div className=' absolute bottom-0 text-white p-5 text-xl bg-gradient-to-t from-black to-transparent w-full'> Have a productive morning</div>
    </div>
  );
};

export default Card;