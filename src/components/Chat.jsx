import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const Chat = ({ setPost = () => { } }) => {
  const navigate = useNavigate();

  const submit = () => {
    setPost(false)
    navigate('/')
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      submit()
    }
  };

  return (
    <div className=" w-full bg-[#FAF3EA] px-5">
      <div className=' lg:max-w-[600px] xl:max-w-[800px] mx-auto'>
        <div className="flex justify-between rounded-full h-[55px] w-full bg-[#FCFAF7] border border-neutral-200 shadow-[rgba(135,_124,_108,_0.2)_0px_9px_20px]">
          <input
            type="text"
            placeholder="Talk with Pi about this"
            className=" placeholder:text-lg w-full placeholder:text-[#C4B8A4] bg-[#FCFAF7] px-4 py-[6px] rounded-full playfair-display"
            onKeyDownCapture={handleKeyDown}
          />
          <div
            onClick={submit} className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 bg-[#FAF3EA] transition-colors duration-300 m-[7px] p-1">
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
          By using Pi, you agree to our <span className=' underline text-[#048247]'>Terms</span> and <span className=' text-[#048247] underline'>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Chat