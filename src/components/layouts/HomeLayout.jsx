import { Outlet } from "react-router-dom";
import Header from "../Header";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
