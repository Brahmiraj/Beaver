import React from "react";
import beaver from "../assets/About/beaver.png";
import Frame from "../assets/About/Frame.png";

export default function About() {
  return (
    <div className="flex justify-start items-center max-2xl:px-10 max-2xl:flex-col-reverse">
      <div className="w-1/2 flex justify-end items-start z-40 pt-40 max-2xl:w-full max-2xl:justify-center">
        <img src={beaver} alt="beaver" className="4xl:w-[1200px]" />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 relative right-56 top-32 z-50 4xl:gap-10 max-2xl:right-0 max-2xl:top-00">
        <div className="flex flex-col justify-center items-center gap-5 4xl:gap-10">
          <h1 className="BATTLEROAD text-[60px] flex justify-center items-center 4xl:text-[100px]">
            ABOUT THE COLLECTION
          </h1>
          <div className="max-w-[600px] flex flex-col justify-center items-center gap-5 4xl:max-w-[1500px] 4xl:gap-10 max-2xl:w-full">
            <h1 className="text-[#14FF00] text-center text-[14px] 4xl:text-[34px]">
              Lorem ipsum dolor sit amet consectetur. In eget tempor duis in
              viverra suscipit turpis malesuada nibh. Et ut mus amet lectus
              sagittis commodo porttitor senectus. Imperdiet dolor tellus ornare
              fames fames diam vitae. A id eget nec faucibus.
            </h1>
            <h1 className="text-[#14FF00] text-center text-[14px] 4xl:text-[34px]">
              Lorem ipsum dolor sit amet consectetur. In eget tempor duis in
              viverra suscipit turpis malesuada nibh. Et ut mus amet lectus
              sagittis commodo porttitor senectus. Imperdiet dolor tellus ornare
              fames fames diam vitae. A id eget nec faucibus.
            </h1>
          </div>
        </div>
        <div className="self-end">
          <button className="button-bg rounded-sm px-10 p-3 4xl:text-4xl">
            Learn more
          </button>
        </div>
      </div>
      {/* <img src={Frame} alt="Frame" className="absolute w-2/5 right-0 top-[500px] opacity-45 -z-50"/> */}
    </div>
  );
}
