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
  const [variants, setVariants] = useState([
    { Ram: "0", Price: "0", Qty: "0" },
  ]);
  const [description, setDescription] = useState("");
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

  return (
    <ProductContext.Provider
      value={{
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
        variants,
        setVariants,
        description,
        setDescription,
        images,
        setImages,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
