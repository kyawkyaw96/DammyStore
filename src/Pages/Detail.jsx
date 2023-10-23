import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchData } from "../api";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const getProducts = async () => {
    const data = await FetchData(`products/${id}`);
    setDetail(data);
    console.log(detail);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const productDetail = console.log(id);
  return (
    <div>
      <h1>{detail?.title}</h1>
      <img src={detail?.thumbnail} alt='' />
    </div>
  );
};

export default Detail;
