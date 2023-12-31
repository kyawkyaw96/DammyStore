import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "../api";
import { BsCartDashFill } from "react-icons/bs";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addCartData } from "../Slices/ProductsSlice";
import Logo from "./Logo";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState();
  const mainPrice = detail?.discountPercentage + detail?.price;
  const getProducts = async () => {
    const data = await FetchData(`products/${id}`);
    setDetail(data);
  };

  // img change
  const defImg = detail?.thumbnail;
  const [img, setImg] = useState();
  // test

  useEffect(() => {
    getProducts();
    setImg(defImg);
  }, [defImg]);

  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    if (qty < detail?.stock) {
      setQty(qty + 1);
    }
  };
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  return (
    <>
      <Logo />
      <div className='  w-full lg:mx-3 font-serif  flex items-center justify-center py-3 px-2 lg:px-0 '>
        <div className='flex  flex-col md:flex-row items-center gap-2 justify-center border-2 w-full py-4 px-2 bg-white lg:p-10 rounded-md shadow-md'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <img
              src={img}
              className=' hover:scale-105 transition-all w-[85%] h-[300px] object-fill object-center'
              alt=''
            />
            <div className=' flex flex-wrap justify-center gap-1 mt-2'>
              {detail?.images?.map((image) => (
                <img
                  key={image}
                  onClick={() => setImg(image)}
                  src={image}
                  className=' w-16 hover:scale-105 transition-all object-cover'
                  alt=''
                />
              ))}
            </div>
          </div>
          <div className='gap-3 flex-1 lg:bg-slate-100 p-4 ml-3 lg:shadow-xl lg:rounded-sm flex flex-col lg:pl-8'>
            <h1 className=' text-2xl font-bold'>{detail?.title}</h1>
            <h2 className=' text-black/50'>{detail?.description}</h2>
            <div className=' flex flex-col'>
              <h3 className=' font-semibold'>
                Rating :{" "}
                <span className=' text-yellow-500'>{detail?.rating}</span>
              </h3>
              <h3 className=' font-semibold'>
                Brand : <span className=' text-black/50'>{detail?.brand}</span>
              </h3>
              <h3 className=' font-semibold'>
                Category :{" "}
                <span className=' text-black/50'>{detail?.category}</span>
              </h3>{" "}
              <h3 className=' font-semibold'>
                Stock : <span className=' text-black/50'> {detail?.stock}</span>
              </h3>
            </div>
            <div className=' flex items-center justify-start lg:flex-row lg:items-center gap-2'>
              <span className='text-lg lg:text-2xl font-bold text-gray-500 '>
                Price : $ {detail?.price}
              </span>
              <del className=' block text-red-600'>$ {mainPrice} </del>
            </div>
            <div className=' select-none flex items-center justify-between w-28 py-0.5 bg-slate-100 px-2'>
              <AiOutlineMinusSquare
                onClick={() => decreaseQty()}
                className=' text-3xl text-cyan-900'
              />
              <span
                className={` w-8 text-center px-2 ${
                  qty == detail?.stock ? "text-red-600" : "text-black"
                }`}
              >
                {qty}
              </span>
              <AiOutlinePlusSquare
                onClick={() => increaseQty()}
                className=' text-3xl text-cyan-900 '
              />
            </div>
            <h1 className=''>
              <span className=' font-bold'>TotalPrice</span> ={" "}
              <span className=' font-semibold text-black/50'>
                {qty * detail?.price} $
              </span>
            </h1>
            <div className=' flex gap-2 lg:gap-0 lg:flex-row select-none'>
              <button
                onClick={() => dispatch(addCartData(detail))}
                className='text-white items-center lg:mr-4 mr-0 gap-2 flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-md px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
              >
                Add to cart
                <BsCartDashFill className=' text-xl text-orange-400 ' />
              </button>
              <Link
                to='/checkout'
                href='#'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-md px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
              >
                BuyNow
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
