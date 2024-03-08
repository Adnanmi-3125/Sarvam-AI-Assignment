import React, { useState } from "react";
import "../App.css";
import Discover from "../components/DiscoverCard";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";
import Conversation from "../components/Conversation";
import PostCard from "../components/PostCard";

const Talk = ({post , setPost}) => {
  const [discover, SetDiscover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#FAF3EA] w-[100vw] h-[100vh]">
      <div>
        <div className=" hidden lg:block absolute rounded-full p-2 bg-[#F5EADC] top-10 right-10 z-20">
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
      <div className="flex flex-row h-full">
        <div className="lg:flex hidden w-24 flex-col items-center gap-1 border-r border-neutral-300 p-3 pt-5 h-full">
          <div
            onClick={() => {
              SetDiscover(!discover);
              setPost(false);
            }}
            className={`flex w-16 h-16 flex-col items-center justify-center text-neutral-900 cursor-pointer gap-[2px] ${
              discover && "bg-[#EDE1D1]"
            } rounded-[10px]`}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 text-[#6B6255] ${discover && "text-black"}`}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 20.4 9.4 20.4Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className=" text-sm">Discover</p>
          </div>
          <div className="flex flex-col w-16 h-16 items-center justify-center text-neutral-900 gap-[2px] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="text-[#6B6255]"
            >
              <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path>
            </svg>
            <p className=" text-sm">Profile</p>
          </div>
        </div>

        <div className=" hidden lg:block">
          {discover && <Discover post={post} setPost={setPost} />}
        </div>

        <div className=" pt-9 w-full">
          {!post ? (
            <div className="flex justify-between items-center lg:hidden px-5 pb-2">
              <button
                aria-label="Go back to discover"
                className="flex h-9 w-9 items-center justify-center rounded-full p-1 text-primary-700 bg-[#F5EADC]"
                type="button"
                onClick={() => navigate("/discover")}
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 20.4 9.4 20.4Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div className=" flex gap-x-2">
              <button
                aria-label="Go to threads"
                className="flex h-9 w-9 items-center justify-center rounded-full p-1 text-primary-700 bg-[#F5EADC] mr-2"
                type="button"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M2 6V20.6667C2 21.403 2.59695 22 3.33333 22H18"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.14286 18L20.8571 18C21.4883 18 22 17.4883 22 16.8571L22 3.14286C22 2.51168 21.4883 2 20.8571 2L7.14286 2C6.51167 2 6 2.51168 6 3.14286L6 16.8571C6 17.4883 6.51167 18 7.14286 18Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 9H9V7H19V9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17 13H9V11H17V13Z"
                    fill="currentColor"
                  ></path>
                  <path d="M19 9H9V7H19V9Z" fill="currentColor"></path>
                  <path d="M9 13H17V11H9V13Z" fill="currentColor"></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8571 1H7.14286C5.95939 1 5 1.95939 5 3.14286V16.8571C5 18.0406 5.95939 19 7.14286 19H20.8571C22.0406 19 23 18.0406 23 16.8571L23 3.14286C23 1.95939 22.0406 1 20.8571 1ZM7.14286 3L20.8571 3C20.936 3 21 3.06396 21 3.14286L21 16.8571C21 16.936 20.936 17 20.8571 17H7.14286C7.06396 17 7 16.936 7 16.8571V3.14286C7 3.06396 7.06396 3 7.14286 3Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3 6C3 5.44772 2.55228 5 2 5C1.44772 5 1 5.44772 1 6V20.6667C1 21.9553 2.04467 23 3.33333 23H18C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21H3.33333C3.14924 21 3 20.8508 3 20.6667V6Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
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
            </div>
          ) : (
            <div className="flex justify-between items-center lg:hidden px-5 pb-2">
              <div
                className="flex  items-center justify-center h-9 w-9 rounded-full p-2 font-bold bg-[#F5EADC]"
                onClick={()=>setPost(false)}
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
          )}
          <div className=" relative max-w-[600px] xl:max-w-[800px] mx-auto playfair-display h-[calc(100vh-85px)] lg:h-full">
            {!post ? <Conversation /> : <PostCard post={post}/>}
            <div className=" absolute bottom-0 w-full">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
