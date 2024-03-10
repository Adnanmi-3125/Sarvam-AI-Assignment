import React from "react";
import IMAGE_CARD_3 from "../assets/images/IMAGE_CARD_3.jpg";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LuRefreshCw } from "react-icons/lu";
import ICON_ROCKET from '../assets/Icons/ICON_ROCKET.png'
import TextCard from "./TextCard";
import { description, descriptionPoints, textCard } from "../constants";

const PostCard = ({ post, setPost }) => {
  return (
    <div className="overflow-auto no-scrollbar px-5 h-full playfair-display max-w-[600px] xl:max-w-[800px] mx-auto bg-[#FAF3EA]">
      {/* <div className="fixed top-20 lg:top-8 w-[600px] xl:w-[800px] h-[60px] lg:h-[100px] bg-gradient-to-b from-[#FAF3EA] to-transparent z-10" /> */}
      <div className=" w-full mt-[50px] lg:mt-[100px]" >
        <Fade delay={100} triggerOnce>
          <div className="flex justify-between items-end p-2 gap-2 overflow-hidden rounded-3xl border border-[#E3D4BF] h-[160px] sm:h-[200px] lg:h-[240px]">
            <div className="flex flex-col justify-end w-[45%] text-xl sm:text-2xl md:text-3xl p-3 playfair-display-bold">
              {post}
            </div>
            <div className=" flex justify-end w-[45%] h-[100%]">
              <LazyLoadImage src={IMAGE_CARD_3} alt="IMAGE_CARD_3" className=" object-cover rounded-3xl w-full h-[100%]" />
            </div>
          </div>
        </Fade>
        <div className="text-lg lg:text-[22px] mt-5 lg:pb-28">
          <Fade delay={300} triggerOnce >
            <div className="">
              {description}
            </div>
          </Fade>
          <Fade triggerOnce cascade e delay={400}>
            {descriptionPoints.map((text, id) => (
              <ul key={id} className=" list-disc ml-6 mt-5 px-5">
                <li className=" mb-2">
                  {text.title && <span className=" font-bold">{text.title} -</span>} {text.description}
                </li>
              </ul>
            ))}
          </Fade>
          <Fade delay={500} triggerOnce cascade className="flex flex-col w-full items-center justify-center">
            <div className="flex sm:gap-x-5 gap-x-2 mt-6 w-min">
              <TextCard text={textCard.healthySnack} setPost={() => setPost(textCard.healthySnack)} icon={ICON_ROCKET} />
              <TextCard text={textCard.mealPrep} setPost={() => setPost(textCard.mealPrep)} />
            </div>
            <div className="flex items-center select-none cursor-pointer justify-center text-sm mb-7 mt-7 gap-2 text-[#048247]">
              <LuRefreshCw size={20} />
              <div>More Ideas</div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
