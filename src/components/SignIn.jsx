import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="w-screen font-montserrat text-center h-screen flex animate-fadeIn justify-center flex-row-reverse">
      <div className="bg-pattern bg-center bg-cover m-4 w-[30%] rounded-r-lg justify-center items-center flex flex-col gap-6 object-scale-down text-white">
        <h1 className="text-4xl font-bold">Hello Friend!</h1>
        <p className="">
          Enter your personal details and
          <br /> start your journey with us
        </p>
        <Link
          className="py-2 px-14 border-2 uppercase hover:bg-white/20 duration-200 border-white rounded-full"
          to={"/signUp"}
        >
          Sign Up
        </Link>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center w-1/2 ">
        <h2 className="text-gold  text-4xl font-bold">
          Sign In to
          <br /> Your Account
        </h2>
        <form className="flex flex-col gap-4 text-black font-semibold">
          <div className="p-4 px-6 flex items-center rounded-lg gap-2 bg-beige">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13_2280)">
                <path
                  d="M5.21048 3.0257H31.0936C32.873 3.0257 34.329 4.66361 34.329 6.6655V28.5044C34.329 30.5062 32.873 32.1442 31.0936 32.1442H5.21048C3.43102 32.1442 1.9751 30.5062 1.9751 28.5044V6.6655C1.9751 4.66361 3.43102 3.0257 5.21048 3.0257Z"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.329 6.66553L18.152 19.4049L1.9751 6.66553"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2280">
                  <rect
                    width="34.9422"
                    height="34.9422"
                    fill="white"
                    transform="translate(0.680908 0.113892)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              className="outline-none placeholder:font-semibold placeholder:text-grey w-80 bg-transparent"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="p-4 px-6 flex items-center rounded-lg gap-2 bg-beige">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13_2285)">
                <path
                  d="M30.8909 17.856H5.41227C3.40206 17.856 1.77246 19.4856 1.77246 21.4958V34.2351C1.77246 36.2453 3.40206 37.8749 5.41227 37.8749H30.8909C32.9011 37.8749 34.5307 36.2453 34.5307 34.2351V21.4958C34.5307 19.4856 32.9011 17.856 30.8909 17.856Z"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.052 17.8561V10.5765C9.052 8.16317 10.0107 5.84867 11.7172 4.14218C13.4237 2.43569 15.7382 1.47699 18.1515 1.47699C20.5649 1.47699 22.8794 2.43569 24.5859 4.14218C26.2924 5.84867 27.251 8.16317 27.251 10.5765V17.8561"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2285">
                  <rect
                    width="34.9422"
                    height="39.3099"
                    fill="white"
                    transform="translate(0.680908 0.0209961)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              className="outline-none placeholder:font-semibold placeholder:text-grey w-80 bg-transparent"
              type="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <a
            className="text-center underline-offset-2 underline font-bold"
            href="#"
          >
            forgot password?
          </a>

          <button
            className="bg-gold px-10 uppercase my-4 w-2/3 rounded-full hover:bg-gold/80 py-4 mx-auto text-white"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
