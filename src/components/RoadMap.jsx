import React from "react";
import map from "../assets/RoadMap/Map.png";

export default function RoadMap() {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="BATTLEROAD text-[60px]"> Roadmap</div>
      <div className="text-gray-500 flex flex-col justify-center items-center pt-32 gap-40 w-full relative">
      <div>
        <img src={map} alt="map" className="left-0 w-full" />
      </div>
        <div className="absolute left-[60%] top-52 w-1/3 mx-auto max-2xl:left-[66%] max-md:left-[65%] max-md:top-44 max-sm:top-40 ">
          <h1 className="text-xl max-2xl:text-lg 4xl:text-3xl max-sm:text-[9px] max-sm:leading-3">Lorem ipsum dolooor</h1>
          <h1 className="max-2xl:text-xs max-w-96 4xl:text-lg max-sm:text-[6px] max-sm:leading-3">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        </div>
        <div className="absolute left-[30%] top-96 w-1/3 mx-auto max-2xl:left-[25%] max-2xl:top-[350px] max-md:left-[65%] max-xl:top-[280px] 4xl:left-[40%] 4xl:top-[360px] max-sm:top-[215px] max-sm:left-[25%]">
          <h1 className="text-xl max-2xl:text-lg 4xl:text-3xl max-sm:text-[9px] max-sm:leading-3">Lorem ipsum dolor</h1>
          <h1 className="max-2xl:text-xs max-w-96 4xl:text-lg max-sm:text-[6px] max-sm:leading-3">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        </div>
        <div className="absolute left-[70%] top-[700px] w-1/3 mx-auto max-2xl:left-[66%] max-2xl:top-[600px] max-md:left-[65%] max-xl:top-[500px] 4xl:left-[60%] max-sm:top-80">
          <h1 className="text-xl max-2xl:text-lg 4xl:text-3xl max-sm:text-[9px] max-sm:leading-3">Lorem ipsum dolor</h1>
          <h1 className="max-2xl:text-xs max-w-96 4xl:text-lg max-sm:text-[6px] max-sm:leading-3">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        </div>
        <div className="absolute left-[25%] top-[700px] w-1/3 mx-auto max-2xl:left-[20%] max-2xl:top-[600px] max-md:left-[65%] max-xl:top-[520px] 4xl:left-[35%] max-sm:top-[340px] max-sm:left-[20%]">
          <h1 className="text-xl max-2xl:text-lg 4xl:text-3xl max-sm:text-[9px] max-sm:leading-3">Lorem ipsum dolor</h1>
          <h1 className="max-2xl:text-xs max-w-96 4xl:text-lg max-sm:text-[6px] max-sm:leading-3">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
        </div>
      </div>
    </div>
  );
}
