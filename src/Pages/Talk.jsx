import React, { useState } from "react";
import "../App.css";
import Discover from "../components/DiscoverCard";
import { useNavigate } from "react-router-dom";
import Chat from "../components/Chat";

const Talk = () => {
  const [discover, SetDiscover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" bg-[#FAF3EA] w-[100vw] h-[100vh]">
      <div>
          <div className=" hidden lg:block absolute rounded-full p-2 bg-[#F5EADC] top-10 right-10">
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
            onClick={() => SetDiscover(!discover)}
            className={`flex w-16 h-16 flex-col items-center justify-center text-neutral-900 gap-[2px] ${discover && "bg-[#EDE1D1]"} rounded-[10px]`}
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#6B6255]"
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
          <div className="flex flex-col w-16 h-16 items-center justify-center text-neutral-900 gap-[2px]">
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

        <div className=" hidden lg:block">{discover && <Discover />}</div>

        <div className=" pt-9 w-full">
          <div className="flex grow items-center lg:hidden px-5">
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
            <div className="grow"></div>
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
          <div className=" relative max-w-[600px] mx-auto playfair-display h-[calc(100vh-85px)] lg:h-full">
            <div className=" overflow-auto no-scrollbar px-5 h-full">
              <div className=" text-[22px]">
                <div className="w-full h-[100px]"></div>
                <div>
                  <div class="mb-4 ">
                    Hey there, great to meet you. I’m Pi, your personal AI.
                  </div>
                  <div class="mb-4 ">
                    My goal is to be useful, friendly and fun. Ask me for
                    advice, for answers, or let’s talk about whatever’s on your
                    mind.
                  </div>
                  <div class="mb-4 ">How's your day going?</div>
                </div>
                <div className="flex justify-end">
                  <div className=" rounded-[10px] bg-[#F5EADC] p-3 ml-auto w-fit max-w-full">
                    hi
                  </div>
                </div>
                <div>
                  <div class="mb-4 mt-6">How's your day going?</div>
                </div>
                <div className="flex justify-end">
                  <div className=" rounded-[10px] bg-[#F5EADC] p-3 ml-auto w-fit max-w-full">
                    Great , What about you?
                  </div>
                </div>
                <div>
                  <div class="mb-4 mt-6">
                    Awesome! What's on your mind today? Anything in particular
                    you want to talk about? 🤔
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className=" rounded-[10px] bg-[#F5EADC] p-3 ml-auto w-fit max-w-full">
                    Nothing much Just feeling happy
                  </div>
                </div>
                <div>
                  <div class="mb-4 mt-6">
                    That’s great to hear! Happiness is a wonderful thing. What's
                    making you feel happy today, if I may ask? 😊
                  </div>
                </div>
                <div className='w-full h-[200px]'>

                                </div>
              </div>
            </div>
            
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
