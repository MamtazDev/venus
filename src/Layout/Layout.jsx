import { Outlet } from "react-router-dom";
import Topbar from "./Topbar/Topbar";
import { useEffect, useState } from "react";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";

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
      <div className={`${!toggle && !isMobile ? "w-[440px]" : "w-[80px]"}  h-screen `}>
        <DashboardSidebar handleToggle={handleToggle} toggle={toggle} isMobile={isMobile} />
      </div>
      <div className=" w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-light_sky pt-20
       ">
        <Topbar toggle={toggle} />
        <div className="mt-[100px]  pe-30 ps-20 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
