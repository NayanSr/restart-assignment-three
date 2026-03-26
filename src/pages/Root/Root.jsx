import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-zinc-200">
        <Outlet />
      </div>
      <Footer />{" "}
    </div>
  );
};

export default Root;
