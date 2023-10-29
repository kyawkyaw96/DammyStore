import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FetchCategories, FetchData, FetchSliderData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addSelectData } from "../Slices/ProductsSlice";
const Drawer = () => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  //fetch categories
  const [category, setCategory] = useState();
  const getCategories = async () => {
    const data = await FetchCategories("categories");
    setCategory(data);
  };
  useEffect(() => {
    getCategories();
  }, [category]);

  //fetch select product form side bar
  const [selectPd, setSelectPd] = useState("laptops");
  const getSelectData = async () => {
    const data = await FetchSliderData(selectPd);
    dispatch(addSelectData(data));
  };
  useEffect(() => {
    getSelectData();
  }, [selectPd]);
  const select = (category) => {
    setSelectPd(category), setToggle(!toggle);
  };

  return (
    <>
      {/* drawer init and toggle */}
      <div className=''>
        <button
          className='text-white bg-cyan-700 hover:bg-stone-400 focus:ring-4 ring-2 ring-blue-200 focus:ring-blue-300 lg:font-medium rounded-lg text-md px-2 lg:px-5 py-0.5 lg:py-2.5 text-center  
           focus:outline-none 
           '
          type='button'
          onClick={() => setToggle(!toggle)}
        >
          <span className='flex-1 flex gap-2 items-center whitespace-nowrap'>
            Products
            <AiOutlineMenu className=' text-lg' />
          </span>
        </button>
      </div>
      {/* drawer component */}
      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          toggle ? " -translate-x-full" : ""
        }  bg-white  w-64 
        `}
      >
        <h5
          className='text-base font-semibold text-gray-500 uppercase 
        '
        >
          Menu
        </h5>
        <button
          type='button'
          onClick={() => setToggle(!toggle)}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center  
          '
        >
          <svg
            className='w-3 h-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 14 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
            />
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto'>
          <ul className='space-y-2 font-medium'>
            {/* category selected from sidebar */}
            {category?.map((category) => (
              <li key={category}>
                <button
                  onClick={() => select(category)}
                  className='flex items-center p-2 text-gray-900 rounded-lg 
                   hover:bg-gray-100 
                    group'
                >
                  <span className='ml-3 font-mono'>{category}</span>
                </button>
              </li>
            ))}
            {/* category selected from sidebar */}

            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg 
                 hover:bg-gray-100 
                  group'
              >
                <svg
                  className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 
                   group-hover:text-gray-900 
                   '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 18'
                >
                  <path d='M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z' />
                </svg>
                <span className='flex-1 ml-3 font-mono whitespace-nowrap'>
                  Users
                </span>
              </a>
            </li>

            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg 
                 hover:bg-gray-100 
                  group'
              >
                <svg
                  className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 
                   group-hover:text-gray-900 
                   '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 18 16'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3'
                  />
                </svg>
                <span className='flex-1 ml-3 font-mono whitespace-nowrap'>
                  Sign In
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg 
                 hover:bg-gray-100 
                  group'
              >
                <svg
                  className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 
                   group-hover:text-gray-900 
                   '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z' />
                  <path d='M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z' />
                  <path d='M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z' />
                </svg>
                <span className='flex-1 ml-3 font-mono whitespace-nowrap'>
                  Sign Up
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
