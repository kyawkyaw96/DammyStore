import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartData } from "../Slices/ProductsSlice";
import { toast } from "react-toastify";
import { PiArrowFatLinesUpDuotone } from "react-icons/pi";

const Card = ({ products }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.cartProducts);
  // console.log(data);
  const toastBtn = (product) => {
    dispatch(addCartData(product));
    toast.success(" Product add!", {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const scrollTop = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };
  return (
    <>
      <div className=' flex justify-center items-center px-4 bg-secondary relative h-16 w-full'>
        <div className=' absolute clip-polygon hover:clip-polygon-hover w-7 hover:w-[20%] transition-all h-full left-0 bg-yellow-300'></div>
        <h1 className='  text-white font-bold text-2xl'>Happy Shopping</h1>
      </div>
      <div className='flex flex-wrap overflow-hidden relative gap-1 lg:gap-5 my-4 w-full items-center justify-center'>
        <button
          className='  right-5 bottom-4 z-40 text-white transition-all hover:animate-bounce shadow-lg hover:drop-shadow-md fixed  w-10 h-10 flex justify-center items-center rounded-full mx-auto bg-slate-400'
          onClick={scrollTop}
        >
          <PiArrowFatLinesUpDuotone className=' text-3xl ' />
        </button>
        {products?.map((product) => (
          <div
            key={product?.id}
            className=' w-44 lg:w-[275px] h-[320px] lg:h-[420px] relative shadow-md bg-white border border-gray-200 rounded-lg  '
          >
            <Link to={`detail/${product?.id}`}>
              <img
                className='p-2 lg:p-4 h-[130px] lg:h-[200px] rounded-t-lg object-cover '
                src={product?.images[0]}
                alt='product image'
              />
            </Link>
            <div className='px-5 pb-5'>
              <a href='#'>
                <h5 className=' text-xs lg:text-xl font-semibold tracking-tight text-gray-900'>
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
              <div className='absolute bottom-5 ml-[-10px] lg:m-0'>
                <div className='flex items-center mt-2.5 mb-2 lg:mb-5 ps-2 lg:ps-0'>
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

                <div className='  text-lg lg:text-2xl font-bold text-gray-500 ps-2 lg:ps-0'>
                  {product?.price}$
                </div>

                <div className='flex lg:flex-row mt-2 gap-2   lg:gap-6 justify-between items-center lg:justify-between '>
                  <button
                    onClick={() => toastBtn(product)}
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-xs px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
                  >
                    AddToCart
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
    </>
  );
};

export default Card;
