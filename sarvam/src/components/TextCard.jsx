import React from 'react';
import { FiTarget } from "react-icons/fi";

const TextCard = ({setPost , text}) => {
  return (
    <div className='flex flex-col items-end justify-between h-full w-full rounded-[20px] border border-white text-left transition-all duration-200 hover:scale-95 bg-[#FAF3EA]  min-h-[160px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] playfair-display cursor-pointer'
    onClick={()=>{
      setPost(false)
      setTimeout(() => {
        setPost(text)
      }, 50);
    }}
    >
        <div class="p-3">
            <FiTarget className=' text-blue-500 text-3xl'/>
        </div>
        <div className='p-4 text-xl'>
            What color am I?
        </div>
    </div>
  );
};

export default TextCard;