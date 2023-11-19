import React from "react";
import { useSelector } from "react-redux";
import CustomSlider from "./CustomSlider";
import Card from "./Card";
import Drawer from "./Drawer";
import SelectedProduct from "./SelectedProduct";
import Nav from "./Nav";
import Header from "./Header";

const Home = () => {
  const products = useSelector((state) => state.products.getProducts.products);
  return (
    <div className=' '>
      <Nav />
      <Header />
      <CustomSlider />
      <SelectedProduct />
      <Card products={products} />
    </div>
  );
};

export default Home;
