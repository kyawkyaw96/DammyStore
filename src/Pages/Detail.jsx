import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FetchData } from "../api";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const mainPrice = detail?.discountPercentage + detail?.price;
  const getProducts = async () => {
    const data = await FetchData(`products/${id}`);
    setDetail(data);
    console.log(detail);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className='  w-full font-serif h-screen flex items-center justify-center '>
      <div className='flex items-center gap-2 justify-center border-2 w-3/4 bg-white p-10 rounded-md shadow-md'>
        <div className='  flex-1 w-1/2 '>
          <img
            src={detail?.thumbnail}
            className=' w-[700px] object-fill object-center'
            alt=''
          />
          <div className=' flex flex-wrap gap-1 mt-2'>
            <img
              src={detail?.images[0]}
              className=' w-24 object-cover'
              alt=''
            />
            <img
              src={detail?.images[1]}
              className=' w-24 object-cover'
              alt=''
            />
            <img
              src={detail?.images[2]}
              className=' w-24 object-cover'
              alt=''
            />
            <img
              src={detail?.images[3]}
              className=' w-24 object-cover'
              alt=''
            />
          </div>
        </div>
        <div className=' flex-1 w-1/2 gap-3 flex flex-col px-2'>
          <h1 className=' text-2xl font-bold'>{detail?.title}</h1>
          <h2 className=' text-black/50'>{detail?.description}</h2>
          <div className=' flex flex-col'>
            <h3 className=' text-yellow-500'>
              Rating : <span className=' text-black/50'>{detail?.rating}</span>
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
          <div>
            <del className=' block text-red-600'> {mainPrice}$</del>
            <h1 className='text-lg lg:text-2xl font-bold text-gray-500 '>
              Price : {detail?.price}${" "}
            </h1>
          </div>
          <Link
            to={`/cart/${detail?.id}`}
            href='#'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  lg:font-medium rounded-lg text-md px-2 lg:px-3 py-0.5 lg:py-2.5 text-center '
          >
            Add to cart
          </Link>
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
