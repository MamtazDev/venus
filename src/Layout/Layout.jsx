import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[360px] h-screen ">
        <SideBar />
      </div>
      <div className="  w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
