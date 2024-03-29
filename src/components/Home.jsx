import ProductContext from "../hooks/productContext";
import ProductList from "./ProductList";
import SideBar from "./SideBar";
import { useContext, useEffect } from "react";
import axios from "../config/api/axios";

const Home = () => {
  const { setCategories } = useContext(ProductContext);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get("category/");
        setCategories(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getCategories();
  }, [setCategories]);
  return (
    <main className="flex h-full w-full">
      <SideBar />
      <ProductList />
    </main>
  );
};

export default Home;
