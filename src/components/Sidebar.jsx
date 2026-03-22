import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Sidebar({ onClick }) {
  return (
    <div className="fixed top-0 right-0 flex  h-full px-[5rem] items-center bg-black/90 text-white gap-10 text-3xl w-[250px]  md:w-[513px] z-50  slide-in">
      <div
        className="text-black bg-white text-[40px] rounded-full p-4 flex items-center justify-center -ml-[7rem] cursor-pointer"
        onClick={onClick}
      >
        <IoMdClose />
      </div>
      <div className="flex flex-col gap-10">
        <NavLink to="#index">Index</NavLink>
        <NavLink to="#services">Services</NavLink>
        <NavLink to="#testimonials">Testimonials</NavLink>
        <NavLink to="#Work">Work</NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
