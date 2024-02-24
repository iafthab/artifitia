const SideBar = () => {
  return (
    <div className="accent-blue text-sm p-16 space-y-6 tracking-wide select-none">
      <h1 className="text-blue font-semibold ">Categories</h1>
      <button>All Categories</button>
      <details className="group flex flex-col">
        <summary className="list-none flex gap-8 justify-between">
          Laptop{" "}
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
        <div className="flex items-center">
          <input className="m-2 w-5 h-5" type="checkbox" name="hp" id="hp" />
          <label htmlFor="hp">HP</label>
        </div>
        <div className="flex items-center">
          <input
            className="m-2 w-5 h-5"
            type="checkbox"
            name="dell"
            id="dell"
          />
          <label htmlFor="dell">Dell</label>
        </div>
      </details>
      <details className="group flex flex-col">
        <summary className="list-none flex gap-8 justify-between">
          Tablet{" "}
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
        <div className="flex items-center">
          <input className="m-2 w-5 h-5" type="checkbox" name="hp" id="hp" />
          <label htmlFor="hp">HP</label>
        </div>
        <div className="flex items-center">
          <input className="m-2 w-5 h-5" type="checkbox" name="hp" id="hp" />
          <label htmlFor="hp">Dell</label>
        </div>
      </details>
      <details className="group flex flex-col">
        <summary className="list-none flex gap-8 justify-between">
          Headphones{" "}
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
        <div className="flex items-center">
          <input className="m-2 w-5 h-5" type="checkbox" name="hp" id="hp" />
          <label htmlFor="hp"> HP</label>
        </div>
        <div className="flex items-center">
          <input className="m-2 w-5 h-5" type="checkbox" name="hp" id="hp" />
          <label htmlFor="hp">Dell</label>
        </div>
      </details>
    </div>
  );
};

export default SideBar;
