import React from "react";
import { Fade } from "react-awesome-reveal";

const Conversation = () => {
  return (
    <div className=" overflow-auto no-scrollbar px-5 h-full playfair-display">
      <div className=" relative text-[22px]">
        <div className=" fixed top-20 lg:top-8 w-[600px] h-[100px] bg-gradient-to-b from-[#FAF3EA] to-transparent z-10"></div>
        <div className=" w-full h-[100px]"></div>
        <Fade cascade damping={0.2} triggerOnce>
        <div>
          <div class="mb-4 ">
            Hey there, great to meet you. I’m Pi, your personal AI.
          </div>
          <div class="mb-4 ">
            My goal is to be useful, friendly and fun. Ask me for advice, for
            answers, or let’s talk about whatever’s on your mind.
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
            Awesome! What's on your mind today? Anything in particular you want
            to talk about? 🤔
          </div>
        </div>
        <div className="flex justify-end">
          <div className=" rounded-[10px] bg-[#F5EADC] p-3 ml-auto w-fit max-w-full">
            Nothing much Just feeling happy
          </div>
        </div>
        <div>
          <div class="mb-4 mt-6">
            That’s great to hear! Happiness is a wonderful thing. What's making
            you feel happy today, if I may ask? 😊
          </div>
        </div>
        <div className="w-full h-[400px]"></div>
        </Fade>
      </div>
    </div>
  );
};

export default Conversation;
