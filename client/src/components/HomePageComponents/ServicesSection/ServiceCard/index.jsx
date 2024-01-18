import React from "react";
import { FaCloud } from "react-icons/fa6";

const ServiceCard = () => {
  return (
    <div className=" flex gap-5">
      <div className=" text-main-color">
        <FaCloud size={42} />
      </div>
      <div className=" space-y-2">
        <h3 className=" cursor-pointer text-gray-400 text-xl">Market Analysis</h3>
        <p className=" text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quis molestiae vitae eligendi at.
        </p>
        <p className=" inline-block cursor-pointer text-main-color hover:text-orange-800">
          Learn More
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
