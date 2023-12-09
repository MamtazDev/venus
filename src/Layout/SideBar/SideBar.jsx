import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[91px] flex items-center border-b border-border_grey">
        <div className="pl-[38px]">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full grow">
        {/* <NavLink
          to="/recommender"
          className={({ isActive }) =>
            isActive
              ? `${activeClassName} flex items-center  text-[14px] gap-[12px] bg-[#202123] p-[16px] rounded-[8px]`
              : "flex items-center  text-[14px] text-[8A8A8A] font-[400] gap-[12px] p-[16px]"
          }
        >
          {location.pathname === "/recommender" ? (
            <img
              src={recomenderActive}
              alt=""
              className="h-[25px] w-[25px] object-contain "
            />
          ) : (
            <img
              src={recomender}
              alt=""
              className=" h-[25px] w-[25px]  object-contain  "
            />
          )}
          Recommender
        </NavLink> */}
        <div>kfjsjf</div>
        <div>kfjsj56</div>
      </div>
    </div>
  );
};

export default Sidebar;
