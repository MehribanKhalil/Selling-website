import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import "./index.scss";
const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`mobileNav bg-white shadow-2xl w-[300px] fixed top-0 right-0 h-[100vh] ${
        isOpen ? " active " : "  "
      }  z-50
       `}
    >
      <div className=" flex  flex-col px-10   py-24 gap-9">
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" absolute  right-6 top-[50px] text-gray-600"
          >
            <IoMdClose size={30} />
          </button>
        </div>
        <NavLink className=" nav-item text-xl " to={"/"}>
          Home{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/Products"}>
          Products{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/About"}>
          {" "}
          About Us{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/Special"}>
          {" "}
          Special{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/admin"}>
          Admin{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/wishlist"}>
          Wishlist{" "}
        </NavLink>
        <NavLink className=" nav-item text-xl" to={"/basket"}>
          Basket
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
