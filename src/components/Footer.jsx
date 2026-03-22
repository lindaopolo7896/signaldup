import React from "react";
import Social from "./Social";

function Footer() {
  return (
    <div className="py-8 flex flex-col gap-[5rem] footer bg-white transition-colors duration-500">
      <div className="px-4 lg:px-[40px] w-full   ">
        <iframe
          className="w-full h-[300px] md:h-[400px] lg:h-[580px] rounded-xl"
          src="https://www.youtube.com/embed/aoag03mSuXQ?autoplay=1&mute=1&loop=1&rel=1&playlist=aoag03mSuXQ"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          autoplay="1"
          mute="1"
          allowFullScreen
        ></iframe>
      </div>

      <hr className="border-black" />

      <div className="px-4 md:px-10 lg:px-[40px]">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-[2rem] lg:gap-[12rem]">
          <form action="" className="w-full xl:w-1/2 ">
            <div className="flex flex-col md:grid grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="First Name"
                className="border bg-transparent  border-black p-4 rounded-lg placeholder:text-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border bg-transparent border-black p-4 rounded-lg placeholder:text-gray-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border bg-transparent  border-black p-4 rounded-lg placeholder:text-gray-500"
              />

              <input
                type="tel"
                name=""
                id=""
                placeholder="Phone Number"
                className="border bg-transparent  border-black p-4 rounded-lg placeholder:text-gray-500"
              />

              <label
                htmlFor="
"
              >
                <input type="checkbox" name="" id="" />
                Analytics
              </label>
              <label
                htmlFor="
"
              >
                <input type="checkbox" name="" id="" />
                PPC Advertising
              </label>

              <label
                htmlFor="
"
              >
                <input type="checkbox" name="" id="" />
                SEO
              </label>

              <label
                htmlFor="
"
              >
                <input type="checkbox" name="" id="" />
                Web Design
              </label>
            </div>
            <button className="w-full bg-black text-white hover:bg-black/80 transition duration-300 ease-in-out p-3 rounded-full  mt-10">
              Schedule a Call
            </button>
          </form>

          <div className="w-full xl:w-1/2 flex flex-col gap-[3rem] lg:gap-[5rem]">
            <div className="flex flex-col gap-4">
              <h5 className="text-sm font-semibold">SAY HELLO</h5>
              <Social social="info@themenectar.com" />
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-sm font-semibold">GET SOCIAL</h5>
              <div className="flex gap-10">
                <Social social="LinkedIn" />
                <Social social="Facebook" />
                <Social social="Instagram" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[5rem] md:text-[13rem] lg:text-[15rem] font-extrabold text-center">
          SIGNAL
        </h1>
      </div>
    </div>
  );
}

export default Footer;
