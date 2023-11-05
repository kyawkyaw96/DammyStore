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
    <div className=' bg-primary w-full overflow-hidden mx-auto m-0 p-0 '>
      <Nav />
      <Header />
      <div className=' w-full p-2 lg:p-0 lg:container mx-auto'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
