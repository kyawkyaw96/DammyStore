import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import CartTable from "./CartTable";
import { removeAllItemCart } from "../Slices/ProductsSlice";

const Cart = () => {
  const data = useSelector((state) => state.products.cartProducts);
  const itemLength = data?.length;
  const dispatch = useDispatch();
  // console.log(data);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(data.reduce((initial, current) => initial + current.price, 0));
  }, []);
  const increaseTotal = (price) => {
    setTotal(total + price);
  };
  const decreaseTotal = (price) => {
    setTotal(total - price);
  };

  return (
    <div className=' h-screen'>
      <div className='relative overflow-x-auto my-3'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50  '>
            <tr>
              <th scope='col' className='px-6 py-3'>
                No
              </th>
              <th scope='col' className='px-2 py-3'>
                Product name
              </th>
              <th scope='col ' className='pl-2 pr-6 py-3 text-end'>
                Price
              </th>
              <th scope='col' className='pl-2 pr-6 py-3 text-center'>
                Quantity
              </th>
              <th scope='col' className='px-2 py-3 text-end'>
                TotalPrice
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          {data?.map((product, index) => (
            <CartTable
              key={product?.id}
              product={product}
              index={index}
              increaseTotal={increaseTotal}
              decreaseTotal={decreaseTotal}
            />
          ))}
        </table>
      </div>
      {/* delete and clear cart */}
      <div
        className={` ${
          itemLength >= 1 ? "block" : "hidden"
        } flex justify-between py-4 items-center px-4 bg-white font-serif`}
      >
        <button
          onClick={() => dispatch(removeAllItemCart())}
          className=' h-9 flex items-center gap-2 text-red-500 border border-red-500 px-2 py-1 hover:text-white hover:bg-red-500 hover:border-white'
        >
          <BsFillTrash3Fill className='' /> Clear Cart
        </button>
        <div className=' w-46 '>
          <h1>
            Total ({itemLength} items) :{" "}
            <span className=' text-red-700 font-bold'>$ {total}</span>
          </h1>
          <button className=' mt-2 w-full text-red-500 border border-red-500 px-2 py-1 hover:text-white hover:bg-red-500 hover:border-white'>
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
