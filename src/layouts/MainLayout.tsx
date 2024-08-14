import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex-1 container mx-auto  flex flex-col gap-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
