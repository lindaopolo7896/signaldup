import React from "react";
import Web from "../assets/web.jpg";
import Brand from "../assets/branding.jpg";
import Content from "../assets/content.jpg";
import Marketing from "../assets/markteting.jpg";
import Media from "../assets/socialMedia.jpg";
import Afri1 from "../assets/Afri1.jpg";
import Afri2 from "../assets/Afri2.jpg";
import Afri3 from "../assets/Afri3.jpg";
import Afri4 from "../assets/Afri4.jpg";

const abouts = [
  {
    id: 1,
    title: "Branding",
    items: ["Logo Design", "Strategy", "Style Guides", "Visual Identity"],
    image: Brand,
  },
  {
    id: 2,
    title: "Marketing",
    items: [
      "SEO",
      "PPC",
      "Conversion Optimization",
      "A/B Testing",
      "Abalytics Reporting",
    ],
    image: Marketing,
  },
  {
    id: 3,
    title: "Content Creation",
    items: [
      "Copywriting",
      "Design",
      "Production",
      "Blogs & Articles",
      "Creative Assets",
    ],
    image: Content,
  },
  {
    id: 4,
    title: "Web Design",
    items: [
      "WordPress",
      "Responsive Design",
      "Prototyping",
      "CMS",
      "Lighthouse",
    ],
    image: Web,
  },
  {
    id: 5,
    title: "Social Media",
    items: [
      "Ads",
      "Analytics",
      "Management",
      "Content Strategy",
      "Community Management",
    ],
    image: Media,
  },
];

function About() {
  return (
    <div
      className="pb-6 about transition-colors duration-500 bg-[#ff4a00]"
      id="services"
    >
      <div className="px-6 md:px-10 lg:px-[40px] pt-[4rem] lg:pt-[10rem] pb-[4rem] lg:pb-[7rem] flex flex-col gap-4 md:flex-row md:items-end justify-between">
        <p className="text-2xl sm:text-3xl lg:text-[3.5rem] md:w-1/2 leading-tight">
          From strategy to spotlight we make brands shine
        </p>

        <div>
          <p className="text-lg lg:text-2xl">Start a Project</p>
          <div className="w-32 md:w-full bg-black h-[2px]"></div>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div className="scroll flex w-max gap-4 sm:gap-6 whitespace-nowrap px-4 sm:px-6">
          {[...abouts, ...abouts].map((about, index) => (
            <div
              key={index}
              className="flex flex-col justify-between px-6 py-6 bg-cover bg-center 
              w-[260px] sm:w-[300px] lg:w-[350px]
              h-[360px] sm:h-[420px] lg:h-[480px]
              rounded-xl"
              style={{ backgroundImage: `url(${about.image})` }}
            >
              <h1 className="text-white text-[20px] sm:text-[24px] pt-6">
                {about.title}
              </h1>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {about.items.map((item) => (
                  <p
                    className="bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1 text-sm text-white"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
