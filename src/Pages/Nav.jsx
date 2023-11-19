import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import { FcBusinessman } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import { useSelector } from "react-redux";

const Nav = () => {
  return (
    <div className=''>
      <div className=' flex flex-col lg:flex-row px-2 container mx-auto h-12 items-center justify-between text-gray-600 font-serif'>
        <h1 className=' '>Welcome to our shop</h1>
        <div className=' flex justify-between lg:gap-5 lg:justify-normal  text-end w-full lg:w-auto '>
          <div className=' flex items-center gap-2'>
            <ImLocation />
            select location
          </div>
          <div className=' flex items-center gap-2'>
            <LuLogIn />
            login
          </div>
          <div className=' flex items-center gap-2'>
            <FcBusinessman />
            register
          </div>
        </div>
      </div>
      <hr className=' text-black' />
    </div>
  );
};

export default Nav;
