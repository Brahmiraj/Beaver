import React from "react";
import beaver from "../assets/Launch/beaver.png";
import beaver_bg from "../assets/Launch/beaver_bg.png";

export default function Launch() {
  return (
    <div className="flex relative px-40 py-40 4xl:py-80 max-2xl:flex-col max-2xl:justify-center max-2xl:items-center max-sm:px-10">
      <div className="w-1/2 flex flex-col gap-5 max-2xl:w-full">
        <div className="sura text-gray-400 text-6xl 4xl:text-9xl">To Launch</div>
        <div className="BATTLEROAD text-[60px] 4xl:text-[100px]">Something</div>
        <div className="sura text-gray-400 text-6xl relative left-20 4xl:text-9xl">Special?</div>
        <div className="text-gray-400 relative left-28 4xl:text-2xl max-sm:left-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
        <div><button className="button-bg rounded-sm px-10 p-3 relative left-28 4xl:text-4xl">Launch</button></div>
      </div>
      <div className="w-1/2 max-2xl:w-full max-2xl:pt-20">
        <img src={beaver_bg} alt="beaver_bg" className="absolute bottom-[-150px] right-[-200px] 4xl:w-[1000px] max-2xl:right-0 max-sm:bottom-0" />
        <img src={beaver} alt="beaver" className="relative left-64 top-20 4xl:w-[750px] 4xl:left-[450px] 4xl:top-40 max-2xl:left-0 max-sm:max-w-[300px] max-sm:mx-auto"/>
      </div>
    </div>
  );
}
