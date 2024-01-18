import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen overflow-x-hidden aspect-video bg-[#2726268f] pt-[22%] md:pt-[20%] px-6 md:px-14 absolute">
      <h1 className="text-3xl md:text-6xl font-bold font-sans  text-white">{title}</h1>
      <p className="mt-6 md:block hidden text-base w-[45%]  text-white">{overview}</p>

      <div className="flex mt-7 md:mt-6 gap-5 ">
        <button className="px-5 flex items-center gap-2 py-2 hover:bg-slate-200 font-bold rounded-md bg-white">
          <FaPlay size={20} /> Play
        </button>
        <button className="px-3 flex items-center py-2 text-white gap-2 font-bold rounded-md bg-[#636363]">
          <MdInfoOutline size={20} className="text-white font-bold" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
