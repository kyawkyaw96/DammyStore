import React, { useState } from "react";
import Drawer from "./Drawer";
import { FetchSliderData } from "../api";
import { useDispatch } from "react-redux";

const SelectionNav = () => {
  
  return (
    <div className=' flex items-center justify-evenly px-4 bg-secondary border-l-8 border-l-red-500 py-2 w-full'>
      <div className=' flex items-center  gap-6'>
        <h1 className=' hidden md:block text-white font-bold'>
          Happy Shopping
        </h1>
        <Drawer />
      </div>
      <div className=' w-[200px] hidden md:block '></div>
      <ul className=' flex text-white gap-3 text-end'>
        <li className=' font-bold hover:text-red-500 hover:underline transition-all '>
          Home
        </li>
        <li className=' font-bold hover:text-red-500 hover:underline transition-all '>
          About
        </li>
        <li className=' font-bold hover:text-red-500 hover:underline transition-all '>
          ContactUs
        </li>
      </ul>
    </div>
  );
};

export default SelectionNav;
