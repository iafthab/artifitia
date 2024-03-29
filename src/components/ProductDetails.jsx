import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../config/api/axios";

const ProductDetails = () => {
  const [qty, setQty] = useState(0);
  const [prod, setProd] = useState("");
  const [variant, setVariant] = useState("");
  const { product } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      console.log("product fetching");
      try {
        const response = await axios.get("products/" + product);
        setProd(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [product]);

  setTimeout(() => {
    setVariant(prod?.variant);
  }, 2000);

  return (
    <main className="w-screen h-full flex p-10 gap-10">
      <section className="w-2/5 *:border-[1.5px] grid grid-cols-2 grid-rows-6  *:border-grey *:rounded-2xl gap-4">
        <img
          alt="photo"
          className="-z-10 row-start-1 row-end-7 col-start-1 col-end-3 object-scale-down"
          src="/img/61b8998441fcd29c0376cd30ecb9d2a8.jpg"
        />
        <img
          alt="photo"
          className="-z-10  object-scale-down"
          src="/img/4d62621c3b0d0e10492367369bb995dc.png"
        />
        <img
          alt="photo"
          className="-z-10  object-scale-down"
          src="/img/e3bf67ba7efb5d8ff9981fa3476727be.png"
        />
      </section>
      <section className="w-2/5">
        <div className="space-y-3 my-4">
          <h1 className="text-2xl font-medium text-blue">{prod.name}</h1>
          <h2 className="font-semibold text-xl">$567.99 </h2>
          <div className="flex gap-4">
            <p className="font-semibold">Availability:</p>
            <span className="flex text-green-600 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              In Stock
            </span>
          </div>
          <p className="text-xs font-medium text-zinc-500">
            Hurry up! Only 34 products left in stock!
          </p>
        </div>
        <hr className="border-b-[1px] my-4 border-grey" />
        <div className="space-y-8 font-medium">
          <div>
            <label htmlFor="ram"> Ram:</label>
            {prod ? (
              <>
                {prod?.variants.map((v) => (
                  <button
                    type="button"
                    key={v.ram}
                    className="selection:border-2 bg-lightGrey mx-4 selection:border-black px-[6px] py-[2px]"
                  >
                    {v.ram}
                  </button>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
          <div className="space-x-4 flex items-center">
            <label htmlFor="qty"> Quantity:</label>
            <div className="bg-grey/30 flex items-center w-fit border-[1.5px] border-black ">
              <button
                className="px-3 py-1 disabled:cursor-not-allowed"
                disabled={qty < 1}
                onClick={() => setQty((prev) => prev - 1)}
              >
                -
              </button>
              <p className="border-x-[1.5px] py-1 border-black px-6">{qty}</p>
              <button
                className="px-3 py-1"
                onClick={() => setQty((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="py-4 hover:bg-gold/80 px-10 bg-gold text-white font-semibold rounded-xl mr-4"
              type="button"
            >
              Edit Product
            </button>
            <button
              className="py-4 hover:bg-gold/80 px-10 bg-gold text-white font-semibold rounded-xl mr-4"
              type="button"
            >
              Buy it now
            </button>
            <button type="button" className="bg-lightGrey rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
