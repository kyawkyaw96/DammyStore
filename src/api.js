import axios from "axios";
const BASE_URL = "https://dummyjson.com";
export const FetchData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};
export const FetchSliderData = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/products/category/${url}`);
  return data;
};
export const FetchCategories = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/products/${url}`);
  return data;
};
