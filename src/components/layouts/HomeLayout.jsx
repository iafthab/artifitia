import { Outlet } from "react-router-dom";
import Header from "../Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
