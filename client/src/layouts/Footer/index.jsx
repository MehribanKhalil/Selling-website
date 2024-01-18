import React from "react";
import { GoHeart } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './index.scss'

const Footer = () => {
  return (
    <footer className="footer section py-24">
      <div className="footer-top grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <h3 className=" title">ABOUT US</h3>
          <p className=" text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            facere laudantium magnam voluptatum autem. Amet aliquid nesciunt
            veritatis aliquam.
          </p>
        </div>

        <div>
          <h3 className=" title">QUICK LINKS</h3>
         <div className=" flex  flex-col gap-2 text-gray-400">
         <NavLink>About Us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Testimonials</NavLink>
          <NavLink>Contact Us</NavLink>
         </div>
        </div>

        <div>
          <h3 className=" title">FOLLOW US</h3>
          <div className=" flex  gap-6">
            <button className=" hover:text-gray-700 transition-all duration-300 rounded-full text-gray-500  w-7 h-7 flex justify-center items-center">
              <FaFacebookF />
            </button>
            <button className="hover:text-gray-700 transition-all duration-300 rounded-full text-gray-500  w-7 h-7 flex justify-center items-center">
              <FaXTwitter />
            </button>
            <button className="hover:text-gray-700 transition-all duration-300 rounded-full text-gray-500  w-7 h-7 flex justify-center items-center">
              <FaLinkedinIn />
            </button>
            <button className="hover:text-gray-700 transition-all duration-300 rounded-full text-gray-500  w-7 h-7 flex justify-center items-center">
              <FaInstagram />
            </button>
          </div>
        </div>

        <div>
          <h3 className=" title">FEATURED PRODUCT</h3>
          <div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
                alt=""
              />
            </div>
            <div className=" space-y-2">
              <h3 className=" text-xl">Leather Brown Shoe</h3>
              <p className=" font-bold">$60.00</p>
              <button className="bg-black hover:bg-white uppercase px-4 py-2 text-sm border-2   border-white text-white  hover:text-black  hover:border-black duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-16">
        <p className=" text-gray-500 flex justify-center items-center gap-1">
          Copyright ©2024 All rights reserved | This template is made with{" "}
          <GoHeart className=" text-gray-600" size={20} /> by{" "}
          <Link className=" hover:text-main-color">Mehi</Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
