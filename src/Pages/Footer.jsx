import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='  w-screen bg-secondary mt-5 flex flex-wrap items-center justify-center gap-2 lg:gap-6  pt-10 pb-5'>
      <div className=' flex flex-col gap-1 lg:gap-3 items-center mr-3'>
        <div className='  text-3xl font-bold'>
          <Link to={"/"}>
            <span className=' text-orange-400'>I</span>T-
            <span className=' text-orange-400'>S</span>hop
          </Link>
        </div>
        <button className=' text-cyan-500 font-bold px-3 py-1 bg-white rounded-md'>
          Thank You
        </button>
      </div>
      <ul className=' text-xs lg:text-sm'>
        <li className=' text-white font-bold text-sm lg:text-lg'>THE BASICS</li>
        <li className=' text-white '>
          <a>About </a>
        </li>

        <li className=' text-white '>
          <a> Support Forums</a>
        </li>
        <li className=' text-white '>
          <a href='https://dummyjson.com'>API</a>
        </li>
        <li className=' text-white '>
          <a>System Status</a>
        </li>
      </ul>

      <ul className=' text-xs lg:text-sm'>
        <li className=' text-white font-bold text-sm lg:text-lg'>
          <a href='#'>COMMUNITY</a>
        </li>
        <li className=' text-white '>
          <a href=''>Guidelines</a>
        </li>
        <li className=' text-white '>
          <a href=''>Discussions</a>
        </li>
        <li className=' text-white '>
          <a href=''>Leaderboard</a>
        </li>
        <li className=' text-white '>
          <a href=''>Twitter</a>
        </li>
      </ul>
      <ul className=' text-xs lg:text-sm'>
        {/* <Link to={"/contact"}> */}
        <li className=' text-white font-bold text-sm lg:text-lg'>
          <a href=''>CONTACT US</a>
        </li>
        {/* </Link> */}
        <li className=' text-white '>
          <a href=''>Developer- W Kyaw Kyaw</a>
        </li>
        <li className=' text-white '>
          <a href='tel:+959789799629'>Ph-09789799629</a>
        </li>
        <li className=' text-white '>
          <a href='mailto:www.winkyaw96@gmail.com'>
            Email- www.winkyaw96@gmail.com
          </a>
        </li>
        <li className=' text-white cursor-pointer'>
          <a href='https://github.com/kyawkyaw96'>GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
