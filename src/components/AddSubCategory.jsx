import { useContext } from "react";
import ProductContext from "../hooks/productContext";

const AddSubCategory = () => {
  const { subCategory, setSubCategory, category, setCategory, categories } =
    useContext(ProductContext);
  return (
    <form className="font-montserrat font-semibold text-base space-y-4">
      <h3 className="text-xl text-center mx-auto">Add Sub Category</h3>
      <select
        className="outline-none border-2 text-grey  border-grey rounded-xl w-80 bg-transparent px-4 py-3"
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option defaultValue hidden>
          Select category
        </option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <br />
      <input
        value={subCategory}
        onChange={(e) => setSubCategory(e.target.value)}
        type="text"
        name="subCategory"
        id="subCategory"
        placeholder="Enter sub category name"
        className="outline-none border-2 border-grey rounded-xl  placeholder:text-grey w-80 bg-transparent px-4 py-3"
      />
    </form>
  );
};

export default AddSubCategory;
