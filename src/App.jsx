import React, { useEffect, useMemo, useState } from "react";
import { FetchCategories, FetchData, FetchSliderData } from "./api";
import { useDispatch } from "react-redux";
import { addAllData, addSliderData } from "./Slices/ProductsSlice";
import Nav from "./Pages/Nav";
import Header from "./Pages/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import Detail from "./Pages/Detail";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  // fetch all products data
  const getProducts = async () => {
    const data = await FetchData("products?limit=100");
    dispatch(addAllData(data));
  };
  // slider data
  const getSliderData = async () => {
    const data = await FetchSliderData("laptops");
    dispatch(addSliderData(data));
  };

  useEffect(() => {
    getProducts();
    getSliderData();
  }, []);

  return (
    <div className=' w-full   mx-auto bg-primary overflow-hidden m-0'>
      <div className=' flex items-end'>
        <ToastContainer
          position='top-right'
          autoClose={500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Zoom}
          theme='light'
          className={" w-1/2 md:w-[220px]"}
        />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
