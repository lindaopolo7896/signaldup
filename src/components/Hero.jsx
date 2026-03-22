import React from "react";
import { motion } from "motion/react";

function Hero() {
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const spanVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <div
      id="index"
      className="hero h-screen flex flex-col justify-end pb-[2rem] px-4 md:px-10 lg:px-[40px] transition-colors duration-500 bg-[#ff4a00]"
    >
      <motion.h1
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="text-[clamp(2rem,10vw,15rem)] font-bold text-center w-[400px] md:w-[600px] lg:w-[900px]  m-auto leading-tight "
      >
        <motion.span variants={spanVariants} className="inline-block ">
          WE
        </motion.span>
        <motion.span variants={spanVariants} className="inline-block ml-10">
          CREATE{" "}
        </motion.span>
        <motion.span variants={spanVariants} className="inline-block  ml-10">
          THE{" "}
        </motion.span>
        <motion.span variants={spanVariants} className="inline-block  ml-10">
          HYPE
        </motion.span>
      </motion.h1>
      <div className="flex  w-full  justify-center md:justify-between font-semibold  text-[10px] md:text-[13px] tracking-widest">
        <p className="hidden md:flex">BASED IN NEWYORK</p>
        <p className="">A BOUTIQUE MARKETING + CREATIVE AGENCY</p>
        <p className="hidden md:flex">ESTABLISHED IN 2013</p>
      </div>
    </div>
  );
}

export default Hero;
