import { useEffect, useState } from "react";
import Acount from "./Acount";
import Preferences from "./Preferences";
import account from "../../assets/icons/account.png";
import accblack from "../../assets/icons/accblack.png";
import preference from "../../assets/icons/preference.png";
import preferenceblack from "../../assets/icons/preferenceblack.png";

const SettinHeader = () => {
  const data = [
    {
      title: "Account",
      img: accblack,
      activeImage: account,
    },
    {
      title: "Preferences",
      img: preferenceblack,
      activeImage: preference,
    },
  ];

  const [selectBtn, setSelectBtn] = useState("Account");

  const tabChangerHandler = (tab) => {
    setSelectBtn(tab);
    localStorage.setItem("activeTabSetting", tab);
  };
  useEffect(() => {
    const activeBtn = localStorage.getItem("activeTabSetting");
    // if (activeBtn) {
    //   setSelectBtn(activeBtn);
    // }
  }, []);
  return (
    <>
      <div className=" ps-2">
        <div className="bg-white ps-25 mb-[20px]">
          <div className="flex gap-[75px]  items-end overflow-x-auto ">
            {data.map((data, index) => (
              <>
                {selectBtn === `${data.title}` ? (
                  <div
                    key={index}
                    onClick={() => tabChangerHandler(data.title)}
                  >
                    <p className=" cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-semibold ">
                      <img
                        className="w-[16px] h-[16px]"
                        src={
                          selectBtn === data.title ? data.activeImage : data.img
                        }
                        alt=""
                      />{" "}
                      {data.title}
                    </p>
                  </div>
                ) : (
                  <div onClick={() => tabChangerHandler(data.title)}>
                    <p className=" cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center text-text_dark_grey  border-b-2 border-white">
                      {" "}
                      <img
                        className="w-[16px] h-[16px]"
                        src={data.img}
                        alt=""
                      />{" "}
                      {data.title}
                    </p>{" "}
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      {selectBtn === "Account" && <Acount />}
      {selectBtn === "Preferences" && <Preferences />}
    </>
  );
};

export default SettinHeader;
