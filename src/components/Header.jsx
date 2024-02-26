import React, { useState } from "react";
import Beaver from "../assets/Header/Beaver.png";
import Twitter from "../assets/Header/Twitter.png";
import Insta from "../assets/Header/Insta.png";
import Discord from "../assets/Header/Discord.png";
import Reddit from "../assets/Header/Reddit.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const handleclick = () => {
    setIsOpenNav(true);
    console.log("clicked");
  };
  const closeModal = () => {
    setIsOpenNav(false);
  };

  return (
    <div className="flex justify-between items-center px-40 pt-10 max-2xl:px-10">
      <div>
        <img src={Beaver} alt="Beaver" className="4xl:w-60" />
      </div>
      <div className="flex justify-between items-center text-white sura text-lg font-semibold max-2xl:hidden max-2xl:text-base 4xl:text-4xl w-1/2">
        <h1>Beaver Network</h1>
        <h1>Beaver DEX</h1>
        <h1>Beaver App</h1>
        <h1>Beaver Launchpad</h1>
      </div>
      <div className="flex justify-center items-center gap-5 max-2xl:gap-3 max-2xl:hidden">
        <img src={Twitter} alt="Twitter" className="4xl:w-10" />
        <img src={Insta} alt="Insta" className="4xl:w-10" />
        <img src={Discord} alt="Discord" className="4xl:w-10" />
        <img src={Reddit} alt="Reddit" className="4xl:w-10" />
      </div>
      <div className="2xl:hidden z-50">
        <RiMenu3Fill
          className="w-7 h-7 text-white"
          onClick={handleclick}
        />
      </div>
      {isOpenNav && (
        <div className="absolute top-0 left-0 glass-effect-box-header w-full h-screen z-50 px-10 pt-10 overflow-hidden">
          <div className="flex justify-end cursor-pointer" onClick={closeModal}>
            <IoClose className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3 text-lg font-semibold text-white">
            <h1 className="NavLink">Beaver Network</h1>
            <h1 className="NavLink">Beaver DEX</h1>
            <h1 className="NavLink">Beaver App</h1>
            <h1 className="NavLink">Beaver Launchpad</h1>
            <div className="flex justify-center items-center gap-5 max-2xl:gap-3">
              <img src={Twitter} alt="Twitter" className="4xl:w-10" />
              <img src={Insta} alt="Insta" className="4xl:w-10" />
              <img src={Discord} alt="Discord" className="4xl:w-10" />
              <img src={Reddit} alt="Reddit" className="4xl:w-10" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
