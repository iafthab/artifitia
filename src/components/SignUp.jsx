import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../config/api/axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("user/signUp", {
        name,
        email,
        password,
      });
      console.log(response.data);
      setSuccess(response.data.message);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  return (
    <main className="w-screen font-montserrat text-center h-screen animate-fadeIn flex justify-center">
      <div className="bg-pattern bg-center bg-cover m-4 w-[30%] rounded-l-lg justify-center items-center flex flex-col gap-6 object-scale-down text-white">
        <h1 className="text-4xl font-bold">Welcome back</h1>
        <p>
          To Keep connected with us please
          <br /> login with your personal info
        </p>
        <Link
          className="py-2 px-14 border-2 uppercase hover:bg-white/20 duration-200 border-white rounded-full"
          to={"/"}
        >
          Sign In
        </Link>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center w-1/2">
        <h2 className="text-gold text-center text-4xl font-bold">
          Create Account
        </h2>
        <p className="text-red-600 font-semibold">{error}</p>
        <p className="text-green-600 font-semibold">{success}</p>
        <form className="flex flex-col gap-4 text-black font-semibold">
          <div className="p-4 px-6 flex items-center rounded-lg gap-2 bg-beige">
            <svg
              width="24"
              height="24"
              viewBox="0 0 36 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_13_2275)">
                <path
                  d="M32.7108 33.8732V30.2334C32.7108 28.3027 31.9438 26.4511 30.5786 25.0859C29.2134 23.7207 27.3618 22.9537 25.4311 22.9537H10.8719C8.94123 22.9537 7.08963 23.7207 5.72444 25.0859C4.35924 26.4511 3.59229 28.3027 3.59229 30.2334V33.8732"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.1517 15.6741C22.1721 15.6741 25.4313 12.4149 25.4313 8.39449C25.4313 4.37406 22.1721 1.11487 18.1517 1.11487C14.1313 1.11487 10.8721 4.37406 10.8721 8.39449C10.8721 12.4149 14.1313 15.6741 18.1517 15.6741Z"
                  stroke="#9A9A9A"
                  strokeWidth="2.18389"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_2275">
                  <rect
                    width="34.9422"
                    height="34.9422"
                    fill="white"
                    transform="translate(0.680908 0.0229492)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none placeholder:font-semibold placeholder:text-grey w-80 bg-transparent"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none placeholder:font-semibold placeholder:text-grey w-80 bg-transparent"
              type="password"
              name="password"
              placeholder="Password"
              id="password"
            />
          </div>
          <button
            onClick={(e) => handleSignUp(e)}
            className="bg-gold px-10 uppercase my-4 w-2/3 rounded-full hover:bg-gold/80 py-4 mx-auto text-white"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
