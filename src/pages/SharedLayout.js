import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar";
import SimpleBottomNavigation from "../layout/BottomNavigation";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <SimpleBottomNavigation />
    </>
  );
};

export default SharedLayout;
