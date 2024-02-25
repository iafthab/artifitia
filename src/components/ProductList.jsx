import Product from "./Product";
import Dialog from "./Dialog";
import AddCategory from "./AddCategory";
import { useContext, useRef, useState } from "react";
import AddSubCategory from "./AddSubCategory";
import AddProduct from "./AddProduct";
import ProductContext from "../hooks/productContext";

const ProductList = () => {
  const { setDialog } = useContext(ProductContext);
  const [dialogContent, setDialogContent] = useState(null);
  const dialogRef = useRef(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

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
      <section className="grid grid-cols-3 grid-rows-2 *:size-60 *:border-[1.5px] *:border-grey *:rounded-2xl gap-4 ">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
      <section className="flex justify-between my-4 mx-2">
        <p>10 of 456 items</p>
        <div>Pagination</div>
        <p>Show 10 rows</p>
      </section>

      <Dialog toggleDialog={toggleDialog} ref={dialogRef}>
        {dialogContent}
      </Dialog>
    </main>
  );
};

export default ProductList;
