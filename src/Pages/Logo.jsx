import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className=' mx-auto p-4 bg-white border-gray-200 mt-2'>
      <div className='  text-3xl font-bold'>
        <Link to={"/"}>
          <span className=' text-orange-400'>I</span>T-
          <span className=' text-orange-400'>S</span>hop
        </Link>
      </div>
    </div>
  );
};

export default Logo;
