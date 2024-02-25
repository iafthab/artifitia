import { useState } from "react";

const AddProduct = () => {
  //   const [variants, setVariants] = useState(1);
  return (
    <section className="font-montserrat bg-beige font-semibold text-base space-y-4">
      <h3 className="text-xl text-center font-semibold mx-auto">Add Product</h3>
      <form className="grid grid-rows-5 text-neutral-600 grid-cols-3 gap-4">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="outline-none col-span-2 border-2 border-grey rounded-xl  placeholder:text-grey font-medium w-80 bg-transparent px-4 py-3"
        />
        <label htmlFor="variants">Variants:</label>
        {/* {variants} */}
        <input
          type="text"
          name="variants"
          id="variants"
          className="outline-none col-span-2 border-2 border-grey rounded-xl  placeholder:text-grey font-medium w-80 bg-transparent px-4 py-3"
        />
        <label htmlFor="subCategory">Sub Category:</label>
        <input
          type="text"
          name="subCategory"
          id="subCategory"
          className="outline-none col-span-2 border-2 border-grey rounded-xl  placeholder:text-grey font-medium w-80 bg-transparent px-4 py-3"
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          className="outline-none col-span-2 border-2 border-grey rounded-xl  placeholder:text-grey font-medium w-80 bg-transparent px-4 py-3"
        />
        <label htmlFor="uploadImage">Upload Image:</label>
        <input
          type="text"
          name="uploadImage"
          id="uploadImage"
          className="outline-none col-span-2 border-2 border-grey rounded-xl  placeholder:text-grey font-medium w-80 bg-transparent px-4 py-3"
        />
      </form>
    </section>
  );
};

export default AddProduct;
