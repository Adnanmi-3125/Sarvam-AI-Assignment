import React from 'react'
import '../App.css'
const Chat = () => {
  return (
    <div className=" w-full bg-[#FAF3EA] px-5">
              <div>
                <div className="flex justify-between rounded-full h-[50px] w-full bg-[#FCFAF7] border border-neutral-200 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                  <input
                    type="text"
                    placeholder="Talk with Pi"
                    className=" placeholder:text-lg placeholder:text-[#C4B8A4] bg-[#FCFAF7] px-4 py-[6px] rounded-full playfair-display"
                  />
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-600 bg-[#FAF3EA] transition-colors duration-300 m-1.5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="16"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M.852 7.648a1.2 1.2 0 0 1 0-1.696l4.8-4.8a1.2 1.2 0 0 1 1.696 0l4.8 4.8a1.2 1.2 0 1 1-1.697 1.696L7.7 4.897V14a1.2 1.2 0 0 1-2.4 0V4.897L2.548 7.648a1.2 1.2 0 0 1-1.696 0Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className=' text-center text-sm roboto-regular py-5'>
                By using Pi, you agree to our <span className=' underline text-green-500'>Terms</span> and <span className=' text-green-500 underline'>Privacy Policy</span>
              </div>
              </div>
            </div>
  )
}

export default Chat