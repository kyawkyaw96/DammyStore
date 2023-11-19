import React, { useMemo, useState } from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { removeFromCart } from "../Slices/ProductsSlice";
import { useDispatch } from "react-redux";

const CartTable = ({ product, index, increaseTotal, decreaseTotal }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const handleRemove = () => {
    // sweetalert

    // sweetalert

    decreaseTotal(product?.price * qty);
    dispatch(removeFromCart(product?.id));
  };
  const increaseQty = () => {
    setQty((prev) => prev + 1);
    increaseTotal(product?.price);
  };
  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      decreaseTotal(product?.price);
    }
  };

  return (
    <tbody>
      <tr className='bg-white border-b  ' key={product?.id}>
        <th className='px-6 py-4'>{index + 1}</th>
        <th
          scope='row'
          className='px-2 py-4 font-medium text-gray-900 whitespace-nowrap '
        >
          {product?.title}
        </th>
        <td className='pl-2 pr-3 py-4 text-end'>{product?.price} $</td>
        <td className='pl-2 pr-6 py-3'>
          <div className=' select-none mx-auto flex items-center justify-between w-28 py-0.5 bg-slate-100 px-2'>
            <AiOutlineMinusSquare
              onClick={decreaseQty}
              className=' text-2xl text-cyan-900'
            />
            <span
              className={` w-8 text-center px-2 ${
                qty == product?.stock ? "text-red-600" : "text-black"
              }`}
            >
              {qty}
            </span>
            <AiOutlinePlusSquare
              onClick={increaseQty}
              className=' text-2xl text-cyan-900 '
            />
          </div>
        </td>
        <td className='pl-2 pr-6 py-4 text-end'>{product?.price * qty} $</td>
        <td
          onClick={handleRemove}
          className='px-6 py-4 text-red-500 cursor-pointer'
        >
          Delete
        </td>
      </tr>
    </tbody>
  );
};

export default CartTable;
