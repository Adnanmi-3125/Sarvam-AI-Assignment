import React, { useState , useEffect } from 'react'
import Card from '../components/Card'
import TextCard from '../components/TextCard'
import CardWithTitle from '../components/CardWithTitle'
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import PostCard from '../components/PostCard'
import Chat from '../components/Chat'

const Discover = ({post , setPost}) => {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width >= 1024) {

      window.location.href = '/';
    }
  }, [windowSize.width]);
  
  return (
    <div className={`w-full lg:w-[375px] lg:border-r lg:border-neutral-300 flex flex-col ${post ? "#E3D4BF":"bg-[#F7EFE3]"} h-[100vh] overflow-auto no-scrollbar`}>
      {
        !post ? (
          <>
            <div className=" bg-[#C3B9AB] w-full h-max absolute top-0 z-10">
        <div className="flex justify-between items-center bg-[#F7EFE3] pb-3 pt-5 mt-2 rounded-t-[28px] md:mt-0 md:rounded-none lg:px-6 px-5">
          <button
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-[#EDE1D1] hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
            type="button"
            onClick={()=>navigate("/")}
          >
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-[14px] w-[14px]"
            >
              <rect
                x="1.8291"
                y="0.000244141"
                width="17.216"
                height="2.58239"
                rx="1.2912"
                transform="rotate(45 1.8291 0.000244141)"
                fill="currentColor"
              ></rect>
              <rect
                y="12.174"
                width="17.216"
                height="2.58239"
                rx="1.2912"
                transform="rotate(-45 0 12.174)"
                fill="currentColor"
              ></rect>
            </svg>
          </button>
          <button
            aria-label="Go to profile"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-[#EDE1D1] hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center py-5 mt-16 rounded-t-[28px] md:mt-16 lg:px-6 text-3xl px-5 lg:hidden playfair-display ">
        Good afternoon
      </div>

      <div className=" flex lg:mt-16 w-full">
        <div className=" flex flex-col gap-y-5 overflow-auto no-scrollbar sm:w-[50%]">
        <div className=" flex gap-x-5 h-[160px] mx-5 sm:ml-5">
            <Card img={img3} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard text={"What color am I?"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 aspect-square mx-5">
            <Card img={img2} text={"Let's talk science"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <Card img={img1} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard text={"What color am I?"}/>
          </div>
          <div className=" flex gap-x-5 aspect-square mx-5">
            <Card img={img3} text={"Make someone feel special"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <Card img={img2} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard text={"What color am I?"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" w-full h-[40px]"></div>
        </div>
        <div className=" hidden sm:flex lg:hidden flex-col gap-y-5 overflow-auto no-scrollbar h-full sm:w-[50%]">
        <div className=" flex gap-x-5 aspect-square mx-5">
            <Card img={img3} text={"Let's talk science"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5 sm:mr-5">
            <Card img={img2} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard text={"What color am I?"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 aspect-square mx-5">
            <Card img={img1} text={"Make someone feel special"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <Card img={img1} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard  text={"What color am I?"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <CardWithTitle text={"Let pi guess your horoscope"} setPost={setPost}/>
          </div>
          <div className=" flex gap-x-5 h-[160px] mx-5">
            <Card img={img2} text={"Have a productive morning"} setPost={setPost}/>
            <TextCard text={"What color am I?"} setPost={setPost}/>
          </div>
          <div className=" w-full h-[40px]"></div>
        </div>
      </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-center lg:hidden px-5 pb-2 pt-9 bg-[#FAF3EA]">
              <div
                className="flex  items-center justify-center h-9 w-9 rounded-full p-2 font-bold bg-[#FAF3EA]"
                onClick={()=>{
                  setPost(false)
                  navigate("/")
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.1408 17.6558C10.9157 17.8808 10.6106 18.0072 10.2924 18.0072C9.97418 18.0072 9.66902 17.8808 9.44398 17.6558L4.64398 12.8558C4.41902 12.6308 4.29264 12.3256 4.29264 12.0074C4.29264 11.6892 4.41902 11.3841 4.64398 11.159L9.44398 6.35902C9.55468 6.24441 9.68709 6.15299 9.8335 6.0901C9.9799 6.02721 10.1374 5.99411 10.2967 5.99272C10.456 5.99134 10.6141 6.0217 10.7615 6.08204C10.909 6.14237 11.043 6.23148 11.1557 6.34415C11.2683 6.45682 11.3574 6.5908 11.4178 6.73828C11.4781 6.88575 11.5085 7.04377 11.5071 7.2031C11.5057 7.36244 11.4726 7.5199 11.4097 7.66631C11.3468 7.81271 11.2554 7.94512 11.1408 8.05582L8.38918 10.8074L17.4924 10.8074C17.8106 10.8074 18.1159 10.9339 18.3409 11.1589C18.566 11.3839 18.6924 11.6892 18.6924 12.0074C18.6924 12.3257 18.566 12.6309 18.3409 12.8559C18.1159 13.081 17.8106 13.2074 17.4924 13.2074L8.38918 13.2074L11.1408 15.959C11.3657 16.1841 11.4921 16.4892 11.4921 16.8074C11.4921 17.1256 11.3657 17.4308 11.1408 17.6558Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="roboto-regular text-lg"> New Thread</div>
              <div className=" rounded-full p-2 bg-[#F5EADC]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5 lg:h-6 lg:w-6 text-[#877C6C]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"></path>
                </svg>
              </div>
            </div>

              <PostCard post={post}/>
              <Chat/>

          </>

        )
      }
    </div>
  );
}

export default Discover