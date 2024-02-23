import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import HomeLayout from "./components/layouts/HomeLayout";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path=":product" element={<ProductDetails />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
