import Product from "./Product";
import Dialog from "./Dialog";
import AddCategory from "./AddCategory";
import { useContext, useEffect, useRef, useState } from "react";
import AddSubCategory from "./AddSubCategory";
import AddProduct from "./AddProduct";
import ProductContext from "../hooks/productContext";
import axios from "../config/api/axios";

const ProductList = () => {
  const { setDialog, products, setProducts } = useContext(ProductContext);
  const [dialogContent, setDialogContent] = useState(null);
  const [page, setPage] = useState(0);
  const dialogRef = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  useEffect(() => {
    const getProducts = async () => {
      console.log("products fetching");
      try {
        const response = await axios.get(`products?page=${page}`);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [setProducts, page]);

  return (
    <main className="mx-auto h-full text-xs">
      <form className="*:p-4 *:bg-gold *:text-white *:font-semibold *:rounded-lg flex justify-end *:m-4 *:mr-0">
        <button
          onClick={() => {
            setDialogContent(<AddCategory />);
            setDialog("category");
            toggleDialog();
          }}
          className="hover:bg-gold/80"
          type="button"
        >
          Add Category
        </button>
        <button
          onClick={() => {
            setDialogContent(<AddSubCategory />);
            setDialog("subCategory");
            toggleDialog();
          }}
          className="hover:bg-gold/80"
          type="button"
        >
          Add Sub Category
        </button>
        <button
          onClick={() => {
            setDialogContent(<AddProduct />);
            setDialog("product");
            toggleDialog();
          }}
          className="hover:bg-gold/80"
          type="button"
        >
          Add Product
        </button>
      </form>
      {products ? (
        <>
          <section className="grid grid-cols-3 grid-rows-2 *:size-60 *:border-[1.5px] *:border-grey *:rounded-2xl gap-4 ">
            {products?.map((product, index) => (
              <Product
                key={index}
                title={product.name}
                id={product._id}
                price={product.variants[0].price}
              />
            ))}
          </section>
          <section className="flex justify-between my-4 mx-2">
            <button
              className="bg-gold disabled:bg-grey p-2 px-3 font-semibold text-white rounded-xl"
              disabled={page < 1}
              type="button"
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            Page:{page + 1}
            <button
              className="bg-gold disabled:bg-grey p-2 px-3 font-semibold text-white rounded-xl"
              type="button"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </section>
        </>
      ) : (
        ""
      )}

      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </main>
  );
};

export default ProductList;
