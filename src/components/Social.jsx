import React from "react";

function Social({ social }) {
  return (
    <div className="overflow-hidden relative   py-1 text-xl  md:text-4xl   group   transition-all duration-300 ease-in-out cursor-pointer ">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full ">
        {social}
      </span>

      <span className="absolute left-0 top-2xl w-full transition-transform duration-300  group-hover:-translate-y-full ">
        {social}
      </span>
    </div>
  );
}

export default Social;
