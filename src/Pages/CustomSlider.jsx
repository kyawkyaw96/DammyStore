import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Drawer from "./Drawer";
import SelectionNav from "./SelectionNav";

const CustomSlider = () => {
  const products = useSelector((state) => state.products.sliderData.products);
  // console.log(products);
  let settings = {
    dots: true,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className=' w-screen gap-6 flex flex-col mx-auto my-4 mb-11'>
      <Slider {...settings}>
        {products?.map((product) => (
          <div className=' ' key={product?.id}>
            <img
              className=' w-3/4 mx-auto h-[340px] object-fill'
              src={product?.thumbnail}
              alt=''
            />
            <h1 className='w-2/4 mx-auto text-xs flex justify-center lg:text-xl text-gray-500 font-bold'>
              {(product?.title)?.substring(0,14)}
            </h1>
          </div>
        ))}
      </Slider>
      <SelectionNav />
    </div>
  );
};

export default CustomSlider;
