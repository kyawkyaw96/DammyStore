import React from "react";
import { useSelector } from "react-redux";
import CustomSlider from "./CustomSlider";
import Card from "./Card";
import Drawer from "./Drawer";
import SelectedProduct from "./SelectedProduct";

const Home = () => {
  const product = useSelector((state) => state.products.getProducts.products);
  return (
    <div className=' '>
      <CustomSlider />
      <SelectedProduct />
      <Card product={product} />
    </div>
  );
};

export default Home;
