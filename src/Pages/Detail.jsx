import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "../api";
import { BsCartDashFill } from "react-icons/bs";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const mainPrice = detail?.discountPercentage + detail?.price;
  const getProducts = async () => {
    const data = await FetchData(`products/${id}`);
    setDetail(data);
  };

  // test

  useEffect(() => {
    getProducts();
  }, []);
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
    <div className='  w-full font-serif h-screen flex items-center justify-center '>
      <div className='flex items-center gap-2 justify-center border-2 w-full bg-white p-10 rounded-md shadow-md'>
        <div className='  flex-1 w-1/2 '>
          <img
            src={detail?.thumbnail}
            className=' hover:scale-105 transition-all w-[700px] object-fill object-center'
            alt=''
          />
          <div className=' flex flex-wrap gap-1 mt-2'>
            <img
              src={detail?.images[0]}
              className=' w-24 hover:scale-105 transition-all object-cover'
              alt=''
            />
            <img
              src={detail?.images[1]}
              className=' w-24 hover:scale-105 transition-all object-cover'
              alt=''
            />
            <img
              src={detail?.images[2]}
              className=' w-24 hover:scale-105 transition-all object-cover'
              alt=''
            />
            <img
              src={detail?.images[3]}
              className=' w-24 hover:scale-105 transition-all object-cover'
              alt=''
            />
          </div>
        </div>
        <div className=' flex-1 w-1/2 gap-3 flex flex-col pl-8'>
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
          <div className=' flex flex-col lg:flex-row items-center gap-2'>
            <h1 className='text-lg lg:text-2xl font-bold text-gray-500 '>
              Price : $ {detail?.price}
            </h1>
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
          <div className=' flex flex-col gap-2 lg:gap-0 lg:flex-row select-none'>
            <Link
              to={`/cart/${detail?.id}`}
              href='#'
              className='text-white items-center lg:mr-4 mr-0 gap-2 flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-md px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
            >
              Add to cart
              <BsCartDashFill className=' text-xl text-orange-400 ' />
            </Link>
            <Link
              to={`/cart/${detail?.id}`}
              href='#'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-md px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
            >
              BuyNow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
//
// brand
// :
// "Samsung"
// category
// :
// "laptops"
// description
// :
// "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched"
// discountPercentage
// :
// 4.15
// id
// :
// 7
// images
// :
// (4) ['https://i.dummyjson.com/data/products/7/1.jpg', 'https://i.dummyjson.com/data/products/7/2.jpg', 'https://i.dummyjson.com/data/products/7/3.jpg', 'https://i.dummyjson.com/data/products/7/thumbnail.jpg']
// price
// :
// 1499
// rating
// :
// 4.25
// stock
// :
// 50
// thumbnail
// :
// "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
// title
// :
