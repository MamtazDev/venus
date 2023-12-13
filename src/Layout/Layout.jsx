import { Outlet } from "react-router-dom";
import SideBar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { useEffect, useState } from "react";

const Layout = () => {

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);

  }
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex">
      <div className={`${!toggle && !isMobile ? "w-[360px]" : "w-[80px]"}  h-screen `}>
        <SideBar handleToggle={handleToggle} toggle={toggle} isMobile={isMobile} />
      </div>
      <div className=" w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-light_sky pt-27 
       ">
        <Topbar />
        <div className="mt-[20px]  pe-30 ps-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
