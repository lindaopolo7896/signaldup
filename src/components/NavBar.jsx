import React from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function NavBar({ onClick, toggle }) {
  return (
    <div
      className={`nav flex items-center justify-between py-8 px-4 md:px-10 xl:px-[40px] fixed top-0 left-0 w-full z-50 ${toggle ? "top-[5rem] max-w-6xl " : ""}`}
    >
      <p className="cursor-pointer font-bold text-[24px]">SALIENT</p>

      <div className="flex  items-center gap-7">
        <button className="border overflow-hidden relative border-black py-1 px-2 md:px-8 text-lg rounded-full  group hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Get Started
          </span>

          <span className="absolute left-0 top-3/8 w-full transition-transform duration-300  group-hover:-translate-y-full">
            Get Started
          </span>
        </button>
        <div onClick={onClick} className="cursor-pointer">
          {toggle ? (
            <IoMdClose className="text-[30px] text-black" />
          ) : (
            <IoMdMenu className="text-[30px] text-black" />
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
