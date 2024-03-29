import React from 'react';
import IMAGE_CARD_1 from '../assets/images/IMAGE_CARD_1.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const CardWithTitle = ({ setPost, text }) => {
  return (
    <div className='flex justify-between h-full w-full overflow-hidden rounded-[20px] border bg-[#FAF3EA] border-white text-left shadow-card transition-all duration-200 hover:scale-95 max-h-[160px] relative p-2 gap-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] playfair-display cursor-pointer'
      onClick={() => {
        setPost(false)
        setTimeout(() => {
          setPost(text);
        }, 50);
      }}
    >
      <div className=' flex justify-end flex-col p-2 text-xl'>
        {text}
      </div>
      <LazyLoadImage src={IMAGE_CARD_1} alt='image1' className=' h-full aspect-square rounded-[20px] object-fill' />
    </div>
  )
};

export default CardWithTitle;