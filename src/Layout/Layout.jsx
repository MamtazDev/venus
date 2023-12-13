import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden lg:block w-[360px] h-screen ">
        <SideBar />
      </div>
      <div className=" w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-light_sky pt-27 
       ">
        <Topbar />
        <div className="mt-[20px] pt-27 pe-30 ps-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
