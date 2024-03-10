import React from "react";
import { Fade } from "react-awesome-reveal";
import { conversation } from "../constants";

const Conversation = () => {
  return (
    <div className=" overflow-auto no-scrollbar px-5 h-full playfair-display">
      <div className=" relative text-[22px]">
        <div className=" w-full h-[100px]"></div>
        <Fade cascade damping={0.2} triggerOnce>
          {conversation.map((chat) => (
            <div key={chat.id}>
              {chat.role === 'RECEIVER' ? (
                <div className="mb-4">
                  {chat.text}
                </div>
              ) : (
                <div className="flex justify-end mb-4">
                  <div className=" rounded-[10px] bg-[#F5EADC] p-3 ml-auto w-fit max-w-full">
                    {chat.text}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="w-full h-[150px]"></div>
        </Fade>
      </div>
    </div>
  );
};

export default Conversation;
