/* eslint-disable react/prop-types */
import { forwardRef, useContext } from "react";
import ProductContext from "../hooks/productContext";
import axios from "../config/api/axios";

export const Dialog = forwardRef(function MyDialog(
  { children, toggleDialog },
  ref
) {
  const {
    dialog,
    setCategory,
    category,
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
    // images,
    // setImages,
  } = useContext(ProductContext);

  const onSubmit = () => {
    dialog === "category"
      ? addCategory()
      : dialog === "product"
      ? addProduct()
      : addSubCategory();
  };

  const addCategory = async () => {
    try {
      const response = await axios.post("category/", { name: category });
      console.log(response.data);
      toggleDialog();
      setCategory("");
    } catch (err) {
      console.log(err);
    }
  };

  const addSubCategory = async () => {
    console.log("subcategory");
    try {
      const response = await axios.post("category/subcategory", {
        categoryID: category,
        subCategory,
      });
      console.log(response.data);
      setSubCategory("");
      setCategory("");
      toggleDialog();
    } catch (err) {
      console.log(err);
    }
  };
  const addProduct = async () => {
    try {
      await axios.post("products/", {
        name: productName,
        subCategory,
        description,
        variants: [
          { qty: qty1, ram: ram1, price: price1 },
          { qty: qty2, ram: ram2, price: price2 },
          { qty: qty3, ram: ram3, price: price3 },
        ],
      });
      setSubCategory("");
      setProductName("");
      setRam1("");
      setRam2("");
      setRam3("");
      setPrice1("");
      setPrice2("");
      setPrice3("");
      setQty1("");
      setQty2("");
      setQty3("");
      setProductName("");
      setCategory("");
      setDescription("");
      toggleDialog();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <dialog ref={ref} className=" z-10 rounded-xl backdrop:bg-gray-800/50">
      <div className="w-fit p-10 flex flex-col gap-4">
        {children}
        <div className="flex flex-row font-montserrat justify-center space-x-4 font-medium text-xl mt-2">
          <button
            className="hover:bg-gold/80 px-4 py-1 uppercase bg-gold text-white rounded-md"
            type="button"
            onClick={onSubmit}
          >
            Add
          </button>
          <button
            className="hover:bg-grey/80 px-4 py-2 uppercase bg-grey/50 rounded-md"
            onClick={toggleDialog}
            type="button"
          >
            Discard
          </button>
        </div>
      </div>
    </dialog>
  );
});

export default Dialog;
