import React, { useEffect, useState } from "react";
import { FetchSliderData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartData } from "../Slices/ProductsSlice";

const SelectedProduct = () => {
  const { products } = useSelector((state) => state.products.selectData);
  const dispatch = useDispatch();

  return (
    <div className=' flex flex-nowrap overflow-auto scroll-smooth gap-2 my-3'>
      {" "}
      {products?.map((product) => (
        <div
          key={product?.id}
          className=' min-w-[176px] lg:min-w-[275px]  h-[320px] lg:h-[420px] relative  bg-white border border-gray-200 rounded-lg shadow '
        >
          <a href='#'>
            <img
              className='p-4 lg:p-8 h-[100px] lg:h-[200px] rounded-t-lg object-cover '
              src={product?.images[0]}
              alt='product image'
            />
          </a>
          <div className='px-5 pb-5'>
            <a href='#'>
              <h5 className=' text-base lg:text-xl font-semibold tracking-tight text-gray-900'>
                {product?.title.length >= 15 ? (
                  <span>{product?.title?.substring(0, 15)}...</span>
                ) : (
                  product?.title
                )}
              </h5>
              <h5 className=' text-gray-900 text-sm lg:text-base'>
                {product?.description.length >= 40 ? (
                  <p>{product?.description.substring(0, 40)}...</p>
                ) : (
                  <p>{product?.description}</p>
                )}
              </h5>
            </a>
            {/* rating and star */}
            <div className='absolute bottom-5 ms-[-10px] lg:ms-0'>
              <div className='flex items-center mt-2.5 mb-2 lg:mb-5 ps-2 lg:ps-0 '>
                <svg
                  className='lg:w-4 lg:h-4 w-2 h-2 text-yellow-300 mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='lg:w-4 lg:h-4 w-2 h-2 text-yellow-300 mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='lg:w-4 lg:h-4 w-2 h-2 text-yellow-300 mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='lg:w-4 lg:h-4 w-2 h-2 text-yellow-300 mr-1'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <svg
                  className='lg:w-4 lg:h-4 w-2 h-2 text-gray-200 '
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 20'
                >
                  <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                </svg>
                <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 lg:px-2.5 lg:py-0.5 rounded  ml-3'>
                  {product?.rating}
                </span>
              </div>
              {/* rating and star */}

              <div className='  text-lg lg:text-2xl font-bold text-gray-500 ps-2 lg:ps-0 '>
                {product?.price}$
              </div>

              <div className='flex lg:flex-row mt-2 gap-2  lg:gap-6 justify-between items-center lg:justify-between '>
                <button
                  onClick={() => dispatch(addCartData(product))}
                  href='#'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-xs px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
                >
                  Add to cart
                </button>
                <Link
                  to={`detail/${product?.id}`}
                  href='#'
                  className='inline-flex items-center text-xs px-2 lg:px-3 py-0.5 lg:py-2.5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '
                >
                  Details
                  <svg
                    className='w-2.5 h-2.5 ml-1'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedProduct;
