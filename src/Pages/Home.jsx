import React from "react";
import { useSelector } from "react-redux";
import CustomSlider from "./CustomSlider";
import Card from "./Card";
import Drawer from "./Drawer";

const Home = () => {
  const product = useSelector((state) => state.products.getProducts.products);
  return (
    <section className=''>
      <CustomSlider />
      <Drawer />
      <Card product={product} />
    </section>
  );
};

export default Home;
