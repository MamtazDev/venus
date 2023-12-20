/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import logo1 from "../../assets/images/logo1.svg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import auction from "../../assets/icons/league.png";
import tracking from "../../assets/icons/tracking.svg";
import timing from "../../assets/icons/timing.svg";
import logout from "../../assets/icons/logout.svg";
import setting from "../../assets/icons/sett.png";
import dashboardIconActive from "../../assets/icons/dashboardIconActive.svg";
import settingActive from "../../assets/icons/settingactive.png";
import leagueActive from "../../assets/icons/leagueIconActive.svg";
import biddingactive from "../../assets/icons/biddingactive.png";
import tournamentactive from "../../assets/icons/tournamentactive.png";

const navlinks = [
  {
    title: "Dashboard",
    img: dashboardIcon,
    imgActive: dashboardIconActive,
    to: "/",
  },
  {
    title: "League",
    img: auction,
    imgActive: leagueActive,
    to: "/league",
  },
  {
    title: "Tournament Tracking Page",
    img: tracking,
    imgActive: tournamentactive,
    to: "/tournamentTracking",
  },
  {
    title: "Bidding History Page",
    img: timing,
    imgActive: biddingactive,
    to: "/biddingHistory",
  },
  {
    title: "Setting",
    img: setting,
    imgActive: settingActive,
    to: "/setting",
  },
];

const Sidebar = ({ handleToggle, toggle, isMobile }) => {
  const location = useLocation();
  return (
    <div className="h-full flex flex-col">
      <div className="h-[91px] flex items-center border-b border-border_grey">
        <div
          className={` ${!toggle && !isMobile ? "pl-[38px]" : "pl-[15px]"}`}
          onClick={handleToggle}
        >
          {!toggle && !isMobile ? (
            <img className="cursor-pointer" src={logo} alt="logo" />
          ) : (
            <img className="cursor-pointer" src={logo1} alt="logo1" />
          )}
        </div>
      </div>
      <div
        className={`grow flex flex-col py-[15px] ${
          !toggle && !isMobile ? "pl-[38px]" : "pl-[15px]"
        }`}
      >
        <div>
          {navlinks.map((data, index) => (
            <NavLink
              key={index}
              to={data.to}
              className={({ isActive }) =>
                isActive
                  ? `hover:text-white flex items-center gap-[12px] bg-base p-[10px] me-[10px] rounded-[5px] text-[#FFF] text-[14px] mb-[15px]`
                  : " flex items-center text-[14px] text-[#9AA8D1] hover:text-[#9AA8D1] font-[400] gap-[12px] p-[16px] mb-[15px]"
              }
            >
              {location.pathname === data.to ? (
                <img
                  src={data.imgActive}
                  alt=""
                  className="h-[25px] w-[25px] object-contain"
                />
              ) : (
                <img
                  src={data.img}
                  alt=""
                  className="h-[25px] w-[25px] object-contain"
                />
              )}
              {!toggle && !isMobile ? `${data.title}` : ""}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
