import React from "react";
import Daniel from "../assets/daniel.jpg";
import Ben from "../assets/Ben.jpg";
import Zak from "../assets/Zak.jpg";
import { useState } from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

import { motion } from "motion/react";

const slideVariant = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "ease-out",
      delay: 0.4,
    },
  },
};

const testimonials = [
  {
    profile: Zak,
    name: "Zak Reid",
    testimony:
      "“The strategy sessions felt like creative therapy and the final campaign? It stopped people in their tracks. Our audience finally sees us the way we always hoped they would.”",
    position: "Founder",
  },
  {
    profile: Ben,

    name: "Ben Chen",
    testimony:
      "“They translated our messy vision into a brand people actually remember. The work felt sharp, human, and oddly effortless to live with.”",
    position: "Creative Director",
  },
  {
    profile: Daniel,

    name: "Daniel Okoth",
    testimony:
      "“Every deliverable landed with purpose. We launched faster, looked better, and finally had a story we were proud to tell.”",
    position: "Head of Growth",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  }

  function handleNext() {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  }

  const current = testimonials[currentIndex];

  return (
    <div
      id="testimonials"
      className="px-4 md:px-10 lg:px-[40px] pt-[4rem] pb-[9rem] flex items-center relative"
    >
      <div
        className="top-[28rem] md:top-[15rem] lg:left-[10rem] absolute border border-black rounded-full p-4 z-10 cursor-pointer"
        onClick={handlePrev}
      >
        <MdOutlineNavigateBefore className="text-[24px] " />
      </div>
      <div className="flex flex-col items-center gap-10 py-[5rem]">
        <motion.div
          key={currentIndex}
          className="flex flex-col items-center justify-center gap-5 "
          variants={slideVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="w-[50px] h-[50px]">
            <img
              src={current.profile}
              alt="profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <p className="text-xl md:text-[24px] lg:text-[30px] text-center lg:w-3/4 leading-relaxed">
            {current.testimony}
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="text-[22px]">{current.name}</p>
            <p className="italic text-gray-500 text-lg">{current.position}</p>
          </div>

          <p className=" text-gray-500 ">{currentIndex + 1}/3</p>
        </motion.div>
        <div className="w-3/4 lg:w-full max-w-sm bg-gray-200 h-[2px]">
          <div
            className={`bg-gray-400 h-[2px] transition-all duration-500 ease-in-out ${
              currentIndex === 0
                ? "w-1/3"
                : currentIndex === 1
                  ? "w-2/3"
                  : "w-full"
            }`}
          ></div>
        </div>
      </div>
      <div
        className="top-[28rem] md:top-[15rem] right-4 lg:right-[10rem] absolute border border-black rounded-full p-4 cursor-pointer"
        onClick={handleNext}
      >
        <MdOutlineNavigateNext className="text-[24px]" />
      </div>
    </div>
  );
}

export default Testimonials;
