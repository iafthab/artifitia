const Header = () => {
  return (
    <header className="bg-blue flex items-center text-xs text-white justify-end py-3 px-32">
      <form className="flex items-center gap-2 rounded-xl bg-white mx-52">
        <input
          className="outline-none placeholder:text-neutral-600 w-80 p-[10px] px-6 rounded-xl text-black font-medium"
          type="text"
          name="search"
          placeholder="Search any things"
          id="search"
        />
        <button
          className="bg-gold hover:bg-gold/85 h-full p-3 font-semibold rounded-xl px-6"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="flex gap-8 font-light">
        <button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4096 20.81C13.0696 20.93 12.5096 20.93 12.1696 20.81C9.26955 19.82 2.78955 15.69 2.78955 8.69C2.78955 5.6 5.27955 3.1 8.34955 3.1C10.1696 3.1 11.7796 3.98 12.7896 5.34C13.7996 3.98 15.4196 3.1 17.2296 3.1C20.2996 3.1 22.7896 5.6 22.7896 8.69C22.7896 15.69 16.3096 19.82 13.4096 20.81Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button>Sign In</button>
        <button className="flex">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 8H21"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cart
        </button>
      </div>
    </header>
  );
};

export default Header;
