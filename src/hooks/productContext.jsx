/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "../config/api/axios";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productName, setProductName] = useState("");
  // const [variants, setVariants] = useState([
  //   { Ram: "0", Price: "0", Qty: "0" },
  // ]);

  const [products, setProducts] = useState("");
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [price3, setPrice3] = useState("");
  const [ram1, setRam1] = useState("");
  const [ram2, setRam2] = useState("");
  const [ram3, setRam3] = useState("");
  const [qty1, setQty1] = useState("");
  const [qty2, setQty2] = useState("");
  const [qty3, setQty3] = useState("");
  const [description, setDescription] = useState("");
  const [imageAddress, setImageAddress] = useState([]);
  const [images, setImages] = useState([]);

  const [dialog, setDialog] = useState("");

  const getCategories = async () => {
    console.log("categories fetching");
    try {
      const response = await axios.get("category/");
      setCategories(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    console.log("products fetching");
    try {
      const response = await axios.get(`products?page=0`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getProduct = async ({ id }) => {
    console.log("product fetching");
    try {
      const response = await axios.get("products/" + id);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getProductsBySubCategory = async (sub) => {
    console.log("product by subcategory fetching");
    try {
      const response = await axios.get("products/subcategory/" + sub);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        getProduct,
        getProductsBySubCategory,
        user,
        setUser,
        dialog,
        setDialog,
        categories,
        setCategories,
        getCategories,
        category,
        setCategory,
        subCategory,
        setSubCategory,
        productName,
        setProductName,
        ram1,
        setRam1,
        ram2,
        setRam2,
        ram3,
        setRam3,
        price1,
        setPrice1,
        price2,
        setPrice2,
        price3,
        setPrice3,
        qty1,
        qty2,
        qty3,
        setQty1,
        setQty2,
        setQty3,
        description,
        setDescription,
        images,
        setImages,
        imageAddress,
        setImageAddress,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
