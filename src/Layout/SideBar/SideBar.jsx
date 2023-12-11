import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import dashboardIconActive from "../../assets/icons/dashboardIconActive.svg";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-full flex flex-col">
      <div className="h-[91px] flex items-center border-b border-border_grey">
        <div className="pl-[38px]">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="grow flex flex-col justify-between py-[48px] pl-[38px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `flex items-center  gap-[12px] bg-base p-[10px] rounded-[5px] text-[#FFF] `
              : "flex items-center  text-[14px] text-[8A8A8A] font-[400] gap-[12px] p-[16px]"
          }
        >
          {location.pathname === "/" ? (
            <img
              src={dashboardIconActive}
              alt=""
              className="h-[25px] w-[25px] object-contain "
            />
          ) : (
            <img
              src={dashboardIcon}
              alt=""
              className=" h-[25px] w-[25px]  object-contain  "
            />
          )}
          Recommender
        </NavLink>
        <div>kfjsjf</div>
        <div>kfjsj56</div>
      </div>
    </div>
  );
};

export default Sidebar;
