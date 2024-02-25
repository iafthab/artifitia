/* eslint-disable react/prop-types */
import { useContext } from "react";
import ProductContext from "../hooks/productContext";

const AddProduct = () => {
  const {
    subCategory,
    setSubCategory,
    productName,
    setProductName,
    variants,
    setVariants,
    description,
    setDescription,
    categories,
    images,
    setImages,
  } = useContext(ProductContext);

  let subcategories = [];
  categories.map((category) => {
    category.subCategory.map((sub) => {
      subcategories.push(sub);
    });
  });

  const handleVariants = (index, key, e) => {
    const object = variants[parseInt(index)];
    object[key] = e.target.value;
    setVariants([...variants, (variants[index] = object)]);
  };

  const addVariants = () =>
    setVariants([...variants, { Ram: "0", Price: "0", Qty: "0" }]);

  const Variants = ({ objKey, value, index }) => {
    return (
      <div className="space-x-4 flex">
        <label className="w-1/5 mt-3" htmlFor={objKey}>
          {objKey}:
        </label>
        <input
          value={value}
          onChange={(e) => handleVariants(index, objKey, e)}
          type="text"
          name={objKey}
          id="variants"
          className="outline-none border-2 border-grey2 rounded-xl  placeholder:text-grey  w-32 bg-transparent px-4 py-3"
        />
      </div>
    );
  };

  return (
    <section className="font-montserrat font-semibold text-[15px] space-y-4">
      <h3 className="text-xl text-center font-semibold mx-auto">Add Product</h3>
      <form className=" *:items-start text-grey *:flex *:justify-between *:gap-4 space-y-4">
        <div>
          <label className="w-1/5 mt-3" htmlFor="title">
            Title:
          </label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="outline-none w-[40rem] col-span-2 border-2 border-grey2 rounded-xl  placeholder:text-grey font-medium bg-transparent px-4 py-3"
          />
        </div>
        <div>
          <label className="w-1/5 mt-3" htmlFor="variants">
            Variants:
          </label>
          <div className="col-span-2 w-full space-y-4">
            <div className="font-medium *:ml-4 justify-end w-full space-y-4">
              {variants.map((v, index) => (
                <div className="flex w-full justify-around" key={index}>
                  {Object.entries(v).map(([key, value], index) => (
                    <Variants
                      objKey={key}
                      index={index}
                      value={value}
                      key={key}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={addVariants}
                className="bg-black px-6 py-3 rounded-xl text-white font-medium"
              >
                Add Variants
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className="w-1/5 mt-3" htmlFor="subCategory">
            Sub Category:
          </label>
          <select
            className="outline-none w-[40rem] col-span-2 border-2 border-grey2 rounded-xl  placeholder:text-grey font-medium bg-transparent px-4 py-3"
            name="category"
            id="category"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option defaultValue hidden>
              Select Sub Category
            </option>
            {subcategories.map((subcategory, index) => (
              <option key={index} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="w-1/5 mt-3" htmlFor="description">
            Description:
          </label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            id="description"
            className="outline-none w-[40rem] col-span-2 border-2 border-grey2 rounded-xl  placeholder:text-grey font-medium bg-transparent px-4 py-3"
          />
        </div>
        <div>
          <label className="w-1/5 mt-3" htmlFor="uploadImage">
            Upload Image:
          </label>
          <div className="w-[40rem]">
            <div className="relative flex border-2 border-grey2 border-dashed justify-center items-center rounded-xl w-28 h-20">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className=""
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.5 11.3341C22.5 14.2581 21.3384 17.0623 19.2708 19.1299C17.2032 21.1975 14.399 22.3591 11.475 22.3591C8.55094 22.3591 5.74669 21.1975 3.6791 19.1299C1.61151 17.0623 0.449951 14.2581 0.449951 11.3341C0.449951 8.41007 1.61151 5.60582 3.6791 3.53823C5.74669 1.47064 8.55094 0.309082 11.475 0.309082C14.399 0.309082 17.2032 1.47064 19.2708 3.53823C21.3384 5.60582 22.5 8.41007 22.5 11.3341ZM12.7 6.43408C12.7 6.10919 12.5709 5.79761 12.3412 5.56788C12.1114 5.33814 11.7998 5.20908 11.475 5.20908C11.1501 5.20908 10.8385 5.33814 10.6087 5.56788C10.379 5.79761 10.25 6.10919 10.25 6.43408V10.1091H6.57495C6.25006 10.1091 5.93848 10.2381 5.70875 10.4679C5.47901 10.6976 5.34995 11.0092 5.34995 11.3341C5.34995 11.659 5.47901 11.9706 5.70875 12.2003C5.93848 12.43 6.25006 12.5591 6.57495 12.5591H10.25V16.2341C10.25 16.559 10.379 16.8706 10.6087 17.1003C10.8385 17.33 11.1501 17.4591 11.475 17.4591C11.7998 17.4591 12.1114 17.33 12.3412 17.1003C12.5709 16.8706 12.7 16.559 12.7 16.2341V12.5591H16.375C16.6998 12.5591 17.0114 12.43 17.2412 12.2003C17.4709 11.9706 17.6 11.659 17.6 11.3341C17.6 11.0092 17.4709 10.6976 17.2412 10.4679C17.0114 10.2381 16.6998 10.1091 16.375 10.1091H12.7V6.43408ZM32.3 7.65908H24.4428C24.2031 6.81278 23.8806 5.99215 23.4799 5.20908H32.3C34.2493 5.20908 36.1188 5.98346 37.4972 7.36185C38.8756 8.74024 39.65 10.6097 39.65 12.5591V32.1591C39.65 34.1084 38.8756 35.9779 37.4972 37.3563C36.1188 38.7347 34.2493 39.5091 32.3 39.5091H12.7C10.7506 39.5091 8.88111 38.7347 7.50272 37.3563C6.12432 35.9779 5.34995 34.1084 5.34995 32.1591V23.3391C6.1266 23.736 6.9449 24.0594 7.79995 24.3019V32.1591C7.79995 33.0729 8.04985 33.928 8.48595 34.6581L19.925 23.4175C20.6122 22.7426 21.5368 22.3646 22.5 22.3646C23.4631 22.3646 24.3877 22.7426 25.0749 23.4175L36.5164 34.6581C36.9655 33.902 37.2016 33.0385 37.2 32.1591V12.5591C37.2 11.2595 36.6837 10.0132 35.7648 9.09426C34.8458 8.17533 33.5995 7.65908 32.3 7.65908ZM32.3 16.2341C32.3 16.7167 32.2049 17.1946 32.0202 17.6404C31.8355 18.0863 31.5648 18.4914 31.2236 18.8327C30.8823 19.174 30.4772 19.4447 30.0313 19.6293C29.5854 19.814 29.1076 19.9091 28.625 19.9091C28.1423 19.9091 27.6645 19.814 27.2186 19.6293C26.7727 19.4447 26.3676 19.174 26.0263 18.8327C25.6851 18.4914 25.4144 18.0863 25.2297 17.6404C25.045 17.1946 24.95 16.7167 24.95 16.2341C24.95 15.2594 25.3371 14.3247 26.0263 13.6355C26.7155 12.9463 27.6503 12.5591 28.625 12.5591C29.5996 12.5591 30.5344 12.9463 31.2236 13.6355C31.9128 14.3247 32.3 15.2594 32.3 16.2341ZM29.85 16.2341C29.85 15.9092 29.7209 15.5976 29.4912 15.3679C29.2614 15.1381 28.9498 15.0091 28.625 15.0091C28.3001 15.0091 27.9885 15.1381 27.7587 15.3679C27.529 15.5976 27.4 15.9092 27.4 16.2341C27.4 16.559 27.529 16.8706 27.7587 17.1003C27.9885 17.33 28.3001 17.4591 28.625 17.4591C28.9498 17.4591 29.2614 17.33 29.4912 17.1003C29.7209 16.8706 29.85 16.559 29.85 16.2341ZM10.2206 36.3878C10.9722 36.8292 11.8283 37.061 12.7 37.0591H32.3C33.2065 37.0591 34.0517 36.8141 34.7794 36.3878L23.3575 25.1668C23.1285 24.9423 22.8206 24.8166 22.5 24.8166C22.1793 24.8166 21.8714 24.9423 21.6425 25.1668L10.2206 36.3878Z"
                  fill="#DCDCDC"
                />
              </svg>
              <input
                value={images}
                onChange={(e) => setImages(e.target.value)}
                type="file"
                name="uploadImage"
                id="uploadImage"
                className="outline-none opacity-0 cursor-pointer absolute size-28 z-10 top-0 col-span-2 border-2 border-grey2 rounded-xl  placeholder:text-grey font-medium bg-transparent px-4 py-3"
              />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
