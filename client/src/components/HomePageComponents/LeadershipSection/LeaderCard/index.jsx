import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const LeaderCard = () => {
  return (
    <div className=" text-center">
      <div>
        <img
          src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
          alt=""
          className=" rounded-xl"
        />
      </div>
      <div className="py-3">
        <h4 className=" cursor-pointer text-gray-400 text-xl">John Rooster</h4>
        <p className=" text-[13px] py-2 text-gray-300">CO-FOUNDER, PRESIDENT</p>
        <p className=" py-4 text-gray-400">
          Nisi at consequatur unde molestiae quidem provident voluptatum
          deleniti quo iste error eos est praesentium distinctio cupiditate
          tempore suscipit inventore deserunt tenetur.
        </p>
        <div className=" flex justify-center gap-2 text-sm">
          <button className=" hover:bg-slate-600 transition-all duration-300 bg-gray-500 rounded-full text-white  w-7 h-7 flex justify-center items-center">
            <FaFacebookF  />
          </button>
          <button className="hover:bg-slate-600 transition-all duration-300 bg-gray-500 rounded-full text-white  w-7 h-7 flex justify-center items-center">
            <FaXTwitter />
          </button>
          <button className="hover:bg-slate-600 transition-all duration-300 bg-gray-500 rounded-full text-white  w-7 h-7 flex justify-center items-center">
            <FaLinkedinIn />
          </button>
          <button className="hover:bg-slate-600 transition-all duration-300 bg-gray-500 rounded-full text-white  w-7 h-7 flex justify-center items-center">
            <FaInstagram />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
