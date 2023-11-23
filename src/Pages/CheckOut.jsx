import React from "react";
import { Link } from "react-router-dom";

const CheckOut = () => {
  return (
    <div className=' w-full h-screen flex justify-center items-center '>
      <div className=' p-3 rounded-md bg-slate-200 shadow-md'>
        <h1 className=' text-4xl text-green-500 font-bold font-serif'>
          Thank You!
        </h1>
        <Link to={"/"}>
          <button className='mt-2 w-full text-blue-500 border border-green-500 px-2 py-1 hover:text-white hover:bg-green-500 hover:border-white'>
            GoToShop
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOut;
