import React, { useState } from "react";
import { BsCartDashFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  const cartLength = useSelector((state) => state.products?.cartProducts);
  const length = cartLength?.length;
  // console.log(length);
  return (
    <nav className='bg-white border-gray-200 '>
      <div className='max-w-screen-xl gap-3 flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className=' flex-1 text-3xl font-bold'>
          <Link to={"/"}>
            <span className=' text-orange-400'>I</span>T-
            <span className=' text-orange-400'>S</span>hop
          </Link>
        </div>

        <div
          className='items-center justify-between  w-full flex gap-2 md:w-auto'
          id='navbar-search'
        >
          <div className='relative mt-3  '>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                className='w-4 h-4 text-gray-500 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type='text'
              id='search-navbar'
              className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 '
              placeholder='Search...'
            />
          </div>
          <div className=' relative'>
            <Link to={"/cart"}>
              <BsCartDashFill className=' text-3xl text-orange-400' />
            </Link>
            <span
              className={` absolute right-[-8px] top-[-8px] text-sm text-black/40 ${
                length == 0 && "hidden"
              }`}
            >
              {length}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
