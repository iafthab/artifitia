import { useContext } from "react";
import ProductContext from "../hooks/productContext";

const AddCategory = () => {
  const { category, setCategory } = useContext(ProductContext);
  return (
    <form className="font-montserrat text-base space-y-4">
      <h3 className="text-xl text-center font-semibold mx-auto">
        Add Category
      </h3>
      <input
        type="text"
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category name"
        className="outline-none border-2 border-grey rounded-xl placeholder:font-semibold placeholder:text-grey w-80 bg-transparent px-4 py-3"
      />
    </form>
  );
};

export default AddCategory;
