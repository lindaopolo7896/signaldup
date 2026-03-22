import React from "react";
import data from "../data/data.json";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Features() {
  const features = Object.values(data);

  return (
    <div className="px-4 lg:px-[40px] py-10">
      <h6 className="border-b border-b-black py-5 text-sm text-gray-500 font-bold">
        FEATURED WORK
      </h6>

      {features.map((item) => (
        <div
          key={item.id}
          className="group relative overflow-hidden py-1 border-b-black border-b flex items-center justify-between cursor-pointer"
        >
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
          <Link
            to={`/portfolio/${item.slug}`}
            className="relative z-10 text-[2rem] md:text-[2.7rem] lg:text-[3.5rem] transition-colors duration-500 group-hover:text-white"
            onClick={() => console.log("clicked", item.slug)}
          >
            {item.name}
          </Link>

          <BsArrowUpRight className="relative z-10 text-[24px] md:text-[2rem] lg:text-[3rem] text-gray-600 transition-colors duration-500 group-hover:text-white" />
        </div>
      ))}
    </div>
  );
}

export default Features;
