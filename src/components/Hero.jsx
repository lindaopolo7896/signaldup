import React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function Hero() {
  const [images, setImages] = useState([]);
  const lastTime = useRef(0);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  const imageList = [img1, img2, img3, img4];

  function handleScroll(e) {
    const now = Date.now();
    if (now - lastTime.current < 80) return;
    lastTime.current = now;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const nextImage = imageList[indexRef.current];
    indexRef.current = (indexRef.current + 1) % imageList.length;

    const newImage = {
      id: now,
      x: e.clientX,
      y: e.clientY,
      src: nextImage,
      rotation: Math.random() * 20 - 10,
    };

    setImages((prev) => [...prev.slice(-5), newImage]);

    timeoutRef.current = setTimeout(() => {
      setImages([]);
    }, 150);
  }
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
      onMouseMove={handleScroll}
    >
      <AnimatePresence>
        {images.map((img) => (
          <motion.img
            key={img.id}
            src={img.src}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute w-[220px] h-[160px] object-cover rounded-xl shadow-xl pointer-events-none"
            style={{
              left: img.x,
              top: img.y,
              transform: `translate(-50%, -50%) rotate(${img.rotation}deg)`,
            }}
          />
        ))}
      </AnimatePresence>
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
