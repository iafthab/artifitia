/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "../config/api/axios";

//! Rename Appropriately

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [dialog, setDialog] = useState("");
  const addCategory = async ({ name }) => {
    console.log("category");
    try {
      const response = await axios.post("category/", { name: name });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addSubCategory = async ({ categoryID, subCategory }) => {
    console.log("subcategory");
    try {
      const response = await axios.post("category/subcategory", {
        categoryID,
        subCategory,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    console.log("getcategory");
    try {
      const response = await axios.get("category/");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  // body for other calculations(?)

  return (
    <ProductContext.Provider
      value={{ dialog, setDialog, addCategory, addSubCategory, getCategories }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
