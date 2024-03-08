import React from 'react';

const Card = ({setPost , img , text}) => {
  return (
    <div className='flex justify-end flex-col h-full w-full overflow-hidden rounded-[20px] bg-[#FAF3EA] border border-white text-left transition-all duration-200 hover:scale-95 min-h-[160px] relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] playfair-display cursor-pointer'
    onClick={()=>{
      setPost(false)
      setTimeout(() => {
        setPost(text)
      }, 50);
    }}
    >
        <img src={img} alt='image1' className=' object-cover h-full' loading='lazy'/>
        <div className=' absolute bottom-0 text-white p-5 text-xl bg-gradient-to-t from-black to-transparent w-full'>
          {text}
        </div>
    </div>
  );
};

export default Card;