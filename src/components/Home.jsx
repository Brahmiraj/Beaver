import React from "react";
import beaver from "../assets/Home/beaver.png";
import bg from '../assets/Home/bg.png'

export default function Home() {
  return (
    <div className="pl-40 pt-10 flex justify-between w-full max-2xl:flex-col max-2xl:px-10">
      <div className="w-1/2 flex flex-col justify-start items-start gap-5 pt-20 max-2xl:w-full max-2xl:justify-center max-2xl:items-center max-sm:pt-0">
        <div className="BATTLEROAD text-[160px] py-5 4xl:text-[200px] 4xl:py-10 max-sm:text-[100px]">Beaver</div>
        <div className="BATTLEROAD text-[60px] 4xl:text-[100px]">Better Tomorrow</div>
        <div className="text-[#14FF00] text-center text-[14px] max-w-[550px] mx-auto 4xl:text-[34px] 4xl:max-w-[1500px]">
          Construct without boundaries. Beaver combines WASM's development
          capabilities, EVM's interoperability, and Cosmos.
        </div>
        <div className="flex gap-10 self-center py-5">
          <button className="button-bg rounded-sm px-10 p-3 4xl:text-4xl">
            Beaver Network
          </button>
          <button className="button-bg rounded-sm px-10 p-3 4xl:text-4xl">Buy $Beaver</button>
        </div>
        <div className="flex justify-between w-full">
          <div className="text-center">
            <h1 className="orbitron text-5xl text-[#89320f] 4xl:text-8xl max-sm:text-3xl">100k <span className="align-text-top">+</span></h1>
            <h1 className="text-gray-400 text-xl sura 4xl:text-3xl  max-sm:text-lg">Customers</h1>
          </div>
          <div className="text-center">
            <h1 className="orbitron text-5xl text-[#89320f] 4xl:text-8xl max-sm:text-3xl">32k <span className="align-text-top">+</span></h1>
            <h1 className="text-gray-400 text-xl sura 4xl:text-3xl  max-sm:text-lg">Artwork</h1>
          </div>
          <div className="text-center">
            <h1 className="orbitron text-5xl text-[#89320f] 4xl:text-8xl max-sm:text-3xl">12k <span className="align-text-top">+</span></h1>
            <h1 className="text-gray-400 text-xl sura 4xl:text-3xl max-sm:text-lg">Owner</h1>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-start z-40 max-2xl:w-full max-2xl:justify-center 4xl:items-center 4xl:w-full">
        <img src={beaver} alt="beaver" className="4xl:w-[600px] relative left-20 max-2xl:left-0 max-2xl:top-10"/>
      </div>
      <div className="">
        <img src={bg} alt="bg" className="absolute w-full opacity-30 top-52 right-[-500px] scale-150"/>
      </div>
    </div>
  );
}
