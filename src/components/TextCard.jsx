import React from 'react';
import { FiTarget } from "react-icons/fi";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TextCard = ({ setPost, text, icon = '' }) => {
  return (
    <div className='flex flex-col aspect-square items-end justify-between h-full w-full rounded-[20px] border border-white text-left transition-all duration-200 hover:scale-95 bg-[#FAF3EA]  min-h-[160px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] playfair-display cursor-pointer'
      onClick={() => {
        setPost(false)
        setTimeout(() => {
          setPost(text)
        }, 50);
      }}
    >
      <div class="p-3">
        {!icon ? (
          <FiTarget className=' text-blue-500 text-3xl' />
        ) : (
          <LazyLoadImage src={icon} alt='image1' className=' h-7 w-7 aspect-square' />
        )}

      </div>
      <div className={`${text.length > 32 ? 'p-3' : 'p-4'} text-xl`}>
        {text}
      </div>
    </div>
  );
};

export default TextCard;