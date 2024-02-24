import Product from "./Product";
import Dialog from "./Dialog";
import AddCategory from "./AddCategory";
import { useRef, useState } from "react";
import AddSubCategory from "./AddSubCategory";
import AddProduct from "./AddProduct";

const ProductList = () => {
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
      <section className="*:p-4 *:bg-gold *:text-white *:font-semibold *:rounded-2xl flex justify-end *:m-4 *:mr-0">
        <button
          onClick={() => {
            setDialogContent(<AddCategory />);
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
            toggleDialog();
          }}
          className="hover:bg-gold/80"
          type="button"
        >
          Add Product
        </button>
      </section>
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

      <Dialog
        title={"Add Category"}
        toggleDialog={toggleDialog}
        ref={dialogRef}
      >
        {dialogContent}
      </Dialog>
    </main>
  );
};

export default ProductList;
