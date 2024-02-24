/* eslint-disable react/prop-types */
import notification from "../../assets/notification.png";
import profile from "../../assets/profile.png";
import cross from "../../assets/icons/cross.png";
import pro1 from "../../assets/icons/pro1.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
const Topbar = ({ toggle, isMobile, handleToggle }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <div>
        <div
          className={`bg-[#F4F7FE] flex justify-between items-center border-b border-[#C8CBD9]  pb-[28px] pe-30 fixed top-0 z-10 
           ${!toggle ? "lg:w-[82%] w-[90%]" : "lg:w-[96%]"} pt-[23px]`}
        >
          {!toggle && !isMobile ? (
            <div
              onClick={handleToggle}
              className="  h-[30px] w-[30px] hidden lg:flex justify-center items-center border border-[#000080] rounded-full me-10 ms-[20px] mb-2 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left text-[#000080]"></i>
            </div>
          ) : (
            <div
              onClick={handleToggle}
              className=" h-[30px] w-[30px] hidden lg:flex justify-center items-center border border-[#000080] rounded-full me-10 ms-[20px] mb-2 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-right text-[#000080]"></i>
            </div>
          )}
          <div className="flex  gap-20 items-center">
            <div className="dropdown dropdown-bottom dropdown-end">
              {/* <div
                tabIndex={0}
                role="button"
                className=" border-none p-0 h-[24px]"
              >
                <img src={notification} alt="notification" />
              </div> */}
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-white rounded-3 w-[425px] pt-[32px] px-[24px] pb-[24px] drop-shadow-lg"
              >
                <div className="flex justify-between">
                  <p className="text7">Notification</p>
                  <div className="text-sm font-medium font-sans text-base  py-[7px] px-10 bg-[#E8EDFF] w-[81px]">
                    5 unread
                  </div>
                </div>
                <div className="flex items-center justify-between py-[23px] border-t border-b border-[#E1E1E1] mt-[17px]">
                  <div className="flex items-center gap-[13px]">
                    <img src={pro1} alt="profile" />
                    <div>
                      <p className="text2">
                        Lan Jaferlon has accepted your request!
                      </p>
                      <small className="text1">28 Feb, 2017 at 9:30pm</small>
                    </div>
                  </div>
                  <img src={cross} alt="" />
                </div>
                <div className="flex items-center justify-between py-[23px] border-b border-[#E1E1E1] ">
                  <div className="flex items-center gap-[13px]">
                    <img src={pro1} alt="profile" />
                    <div>
                      <p className="text2">
                        Lan Jaferlon has accepted your request!
                      </p>
                      <small className="text1">28 Feb, 2017 at 9:30pm</small>
                    </div>
                  </div>
                  <img src={cross} alt="" />
                </div>
                <div className="flex items-center justify-between py-[23px] border-b border-[#E1E1E1]">
                  <div className="flex items-center gap-[13px]">
                    <img src={pro1} alt="profile" />
                    <div>
                      <p className="text2">
                        Lan Jaferlon has accepted your request!
                      </p>
                      <small className="text1">28 Feb, 2017 at 9:30pm</small>
                    </div>
                  </div>
                  <img src={cross} alt="" />
                </div>
                <button className="py-10 px-[23px] bg-base rounded-3 text-white mt-[20px]">
                  View all
                </button>
              </div>
            </div>
            <div
              className="flex items-center gap-6 cursor-pointer"
              onClick={() => navigate("/setting")}
            >
              <img
                src={
                  user?.image
                    ? `${import.meta.env.VITE_BASE_URL}/assets/${user?.image}`
                    : profile
                }
                alt=""
                className="w-[20px] h-[20px] rounded-full object-cover"
              />
              <p>{user?.name}</p>
            </div>
            {/* <button className="py-10 px-[23px] bg-base rounded-3 text-white customButton">
              Leave
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
