const ProductDetails = () => {
  return (
    <main>
      <section>
        <img alt="photo" />
        <img alt="photo" />
        <img alt="photo" />
      </section>
      <section>
        <div>
          <h1>Product Name</h1>
          <h2>$567.99 </h2>
          <p>
            Availability:
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            In Stock
          </p>
          <p>Hurry up! only 34 product left in stock!</p>
        </div>
        <hr />
        <form>
          <div>
            <label htmlFor="ram"> Ram:</label>
            <button type="button">4 GB</button>
            <button type="button">8 GB</button>
            <button type="button">16 GB</button>
          </div>
          <div>
            <label htmlFor="ram"> Quantity:</label>
            Increment/Decrement
          </div>
          <button type="button">Edit Product</button>
          <button type="button">Buy it now</button>
          <button type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </form>
      </section>
    </main>
  );
};

export default ProductDetails;
