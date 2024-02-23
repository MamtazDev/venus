/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import logo1 from "../../assets/images/logo1.svg";
import dashboardIcon from "../../assets/icons/dashboardIcon.svg";
import auction from "../../assets/icons/league.png";
import tracking from "../../assets/icons/tracking.svg";
import timing from "../../assets/icons/bidding.svg";
import logout from "../../assets/icons/logout.svg";
import setting from "../../assets/icons/sett.svg";
import dashboardIconActive from "../../assets/icons/dashboardIconActive.svg";
import settingActive from "../../assets/icons/settingactive.png";
import leagueActive from "../../assets/icons/leagueIconActive.svg";
import biddingactive from "../../assets/icons/biddingactive.png";
import tournamentactive from "../../assets/icons/tournamentactive.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

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
    title: "Tournament Tracking",
    img: tracking,
    imgActive: tournamentactive,
    to: "/tournamentTracking",
  },
  {
    title: "Bidding History",
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

const DashboardSidebar = ({ toggle, isMobile }) => {
  const { logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div className="h-full flex flex-col">
      <div
        className={` ${
          !toggle && !isMobile
            ? "border-b border-border_grey h-[91px]  flex items-center justify-between"
            : "border-b border-border_grey h-[91px] flex items-center flex-col-reverse justify-center "
        }`}
      >
        <div className={` ${!toggle && !isMobile ? "pl-[38px]" : ""}`}>
          {!toggle && !isMobile ? (
            <Link to="/">
              <img className="cursor-pointer" src={logo} alt="logo" />
            </Link>
          ) : (
            <Link to="/">
              {" "}
              <img className="cursor-pointer" src={logo1} alt="logo1" />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`grow flex flex-col py-[48px] ${
          !toggle && !isMobile ? "pl-[38px]" : "pl-[10px]"
        }`}
      >
        <div className="mb-[90px] ">
          {navlinks.map((data, index) =>
            data?.title === "League" ? (
              <button
                style={{ width: "90%" }}
                key={index}
                className={
                  location.pathname.includes("/league")
                    ? `hover:text-white flex items-center gap-[12px] bg-base  rounded-[5px] text-[#FFF] text-[16px] pl-[10px] py-[10px] mb-[15px] 
               ${!toggle ? "lg:me-[47px] me-[10px]" : "me-[15px]"}`
                    : "hidden"
                }
              >
                {location.pathname.includes("/league") ? (
                  <img
                    src={data.imgActive}
                    alt=""
                    className="h-[25px] w-[28px] object-cover"
                  />
                ) : (
                  <img
                    src={data.img}
                    alt=""
                    className="h-[25px] w-[28px] object-cover"
                  />
                )}
                {!toggle && !isMobile ? `${data.title}` : ""}
              </button>
            ) : (
              <NavLink
                key={index}
                to={data.to}
                className={({ isActive }) =>
                  isActive
                    ? `hover:text-white flex items-center gap-[12px] bg-base  rounded-[5px] text-[#FFF] text-[16px] pl-[10px] py-[10px] mb-[15px] 
                  ${!toggle ? "lg:me-[47px] me-[10px]" : "me-[15px]"}`
                    : "flex items-center text-[16px] text-[#9AA8D1] hover:text-[#9AA8D1]  font-[400] gap-[12px] pl-[10px] py-[10px] mb-[15px]"
                }
              >
                {location.pathname === data.to ? (
                  <img
                    src={data.imgActive}
                    alt=""
                    className="h-[25px] w-[28px] object-cover"
                  />
                ) : (
                  <img
                    src={data.img}
                    alt=""
                    className="h-[25px] w-[28px] object-cover"
                  />
                )}
                {!toggle && !isMobile ? `${data.title}` : ""}
              </NavLink>
            ),
          )}
        </div>
        <hr className="text-[#F0F5FF]" />
        <button
          to="/login"
          className="flex items-center text-[16px] text-[#9AA8D1] hover:text-[#9AA8D1] pl-[10px] font-[400] gap-[12px] mt-[30px] "
          onClick={handleLogout}
        >
          <img src={logout} alt="" />
          {!toggle && !isMobile ? `Logout` : ""}
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
