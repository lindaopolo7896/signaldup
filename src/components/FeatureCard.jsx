import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function FeatureCard({
  name,
  title,
  description,
  expertises = [],
  services = [],
  images = [],
  onClose,
}) {
  return (
    <div className=" bg-white z-100   px-4 lg:px-[40px] py-[5rem]">
      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          <IoArrowBackCircleOutline
            onClick={onClose}
            className="text-[60px] cursor-pointer"
          />

          <h5 className="uppercase font-semibold">{name}</h5>

          <p className="leading-10 md:leading-tight text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-bold">
            {title}
          </p>

          <p className="text-xl leading-loose text-black/70">{description}</p>
        </div>

        <div className="w-full mt-5 lg:mt-0 lg:w-1/2 flex flex-col lg:pl-[10rem] gap-[4rem]">
          <div className="flex flex-col  gap-3">
            <h5 className="font-semibold text-black/60 uppercase">
              Expertises
            </h5>

            <div className="gap-2 flex flex-col">
              {expertises.map((expertise, index) => (
                <p key={index} className="text-2xl">
                  {expertise}
                </p>
              ))}
            </div>
          </div>

          <div className="gap-2 flex flex-col">
            <h5 className="font-semibold text-black/60 uppercase">Services</h5>

            <div className="gap-2 flex flex-col">
              {services.map((service, index) => (
                <p key={index} className="text-2xl">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {images[0] && (
        <div className="mt-[5rem] w-full md:h-[400px] lg:h-[600px] h-[200px]">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      )}
      <div className="mt-10 flex-col md:flex-row  flex gap-10">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="w-full lg:w-1/2 h-[200px] md:h-[250px] lg:h-[400px]"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureCard;
