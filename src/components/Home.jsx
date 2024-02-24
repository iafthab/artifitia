import ProductList from "./ProductList";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <main className="flex h-full w-full">
      <SideBar />
      <ProductList />
    </main>
  );
};

export default Home;
