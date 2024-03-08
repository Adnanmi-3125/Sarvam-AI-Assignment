import React from "react";
import img3 from "../assets/img3.jpg";
import { Fade } from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LuRefreshCw } from "react-icons/lu";
import rocket_icon from '../assets/img_rocket.png';
import TextCard from "./TextCard";

const PostCard = ({ post }) => {
  return (
    <div className="overflow-auto no-scrollbar px-5 h-full playfair-display max-w-[600px] xl:max-w-[800px] mx-auto bg-[#FAF3EA]">
      <div className=" fixed top-20 lg:top-8 w-[600px] xl:w-[800px] h-[60px] lg:h-[100px] bg-gradient-to-b from-[#FAF3EA] to-transparent z-10"></div>
      <div className=" w-full h-[50px] lg:h-[100px]"></div>

      <Fade delay={100} triggerOnce>
        <div className="flex justify-between items-end p-2 gap-2 overflow-hidden rounded-3xl border border-[#E3D4BF] h-[160px] sm:h-[200px] lg:h-[240px]">
          <div className="flex flex-col justify-end w-[45%] text-xl sm:text-2xl md:text-3xl p-3 playfair-display-bold">
            {post}
          </div>
          <div className=" flex justify-end w-[45%] h-[100%]">
            <LazyLoadImage src={img3} alt="img1" className=" object-cover rounded-3xl w-full h-[100%]" />
          </div>
        </div>
      </Fade>

      <div className="max-sm:ml-3 text-lg lg:text-[22px] mt-5">

        <Fade delay={300} triggerOnce >
          <div className="">
            Have you ever wondered if decisions are as rational as they feel? It
            turns out that minds play tricks, leading people to make choices based
            on unconscious biases and cognitive errors. Here are a few fascinating
            psychological blindspots to ponder:
          </div>
        </Fade>

        <Fade delay={500} triggerOnce>
          <ul className=" list-disc ml-6 mt-5 px-5">
            <Fade cascade damping={0.2} triggerOnce>
              <li className=" mb-2">
                <span className=" font-bold">Confirmation Bias</span> - Our tendency
                to seek out information that confirms our existing beliefs while
                ignoring contradictory evidence.
              </li>
              <li className=" mb-2">
                <span className=" font-bold">Sunk Cost Fallacy</span> - Persisting
                in a course of action because we've invested time, money, or effort,
                even if it's no longer beneficial.
              </li>
              <li className=" mb-2">
                <span className=" font-bold">Availability Heuristic</span> - Judging
                the likelihood of an event based on how easily it comes to mind,
                ignoring relevant statistics.
              </li>
              <li className=" mb-2">
                <span className=" font-bold">Optimism Bias</span> - Underestimating
                risks and overestimating the chances of positive outcomes, leading
                to overconfidence.
              </li>
              <li className="mb-2 mt-5 -ml-5 list-none">
                So, do you think you’ve ever experienced any of these? Let’s see if we
                can overcome them together.
              </li>
            </Fade>
          </ul>
          <div className="flex gap-x-5 h-[160px] w-fit mx-5 sm:ml-5 mt-6">
            <TextCard text={"Healthy Snack Idea For Energy Boost"} setPost={() => { }} icon={rocket_icon} />
            <TextCard text={"Meal Prep Strategies For Busy Weeks"} setPost={() => { }} />
          </div>
          <div className="flex items-center justify-center text-sm mb-7 mt-7 gap-2 text-green-500">
            <LuRefreshCw size={20} />
            <text>More Ideas</text>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default PostCard;
