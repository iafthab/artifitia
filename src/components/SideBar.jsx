import { useContext } from "react";
import ProductContext from "../hooks/productContext";

const SideBar = () => {
  const { categories } = useContext(ProductContext);
  return (
    <div className="accent-blue text-sm p-16 space-y-6 tracking-wide select-none">
      <h1 className="text-blue font-semibold ">Categories</h1>
      <button>All Categories</button>
      {categories ? (
        <>
          {categories?.map((category, index) => (
            <details key={index} className="group flex flex-col">
              <summary className="list-none flex gap-8 justify-between">
                {category.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 group-open:rotate-90 duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </summary>
              {category?.subCategory.map((sub, index) => (
                <div key={index} className="flex items-center">
                  <input
                    className="m-2 w-5 h-5"
                    type="checkbox"
                    name={sub}
                    id={sub}
                  />
                  <label htmlFor={sub}>{sub}</label>
                </div>
              ))}
            </details>
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideBar;
