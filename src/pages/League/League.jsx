import { useEffect, useState } from "react";
import Home from "../../components/League/Home/Home";
import Auction from "../../components/League/Auction/Auction";
import Setting from "../../components/League/Setting/Setting";
import Team from "../../components/League/Team/Team";

import homeActive from "../../assets/icons/home.svg";
import home from "../../assets/icons/homeblack.png";

import auction from "../../assets/icons/auction.svg";
import auctionActive from "../../assets/icons/yellowauction.png";

import setting from "../../assets/icons/setting.png";
import settingActive from "../../assets/icons/yellowsetting.png";

import team from "../../assets/icons/team.png";
import teamActive from "../../assets/icons/yellowteam.png";
import { Link, useParams } from "react-router-dom";
import { getLeagueInfo } from "../../api/league";
import { getAllTeamsBySeasonId } from "../../api/publicApis";

const League = () => {
  const data = [
    {
      title: "Home",
      img: home,
      activeIcon: homeActive,
    },
    {
      title: "Auction",
      img: auction,
      activeIcon: auctionActive,
    },
    {
      title: "Team",
      img: team,
      activeIcon: teamActive,
    },
    {
      title: "Setting",
      img: setting,
      activeIcon: settingActive,
    },
  ];

  const [selectBtn, setSelectBtn] = useState("Home");
  const tabChangerHandler = (tab) => {
    setSelectBtn(tab);
    localStorage.setItem("activeTab", tab);
  };

  // const [leagueBasicInfo, setLeagueBasicInfo] = useState(null);
  // const [allTeamsInfo, setAllTeamsInfo] = useState(null);

  // const { id } = useParams();

  // // leagueInfo
  // const fetchLeagueInfo = async () => {
  //   const leagueRes = await getLeagueInfo(id);
  //   setLeagueBasicInfo(leagueRes?.data);

  // };

  // // leagueteams
  // const fetchAllTeams = async () => {
  //   const teamsRes = await getAllTeamsBySeasonId(leagueBasicInfo?.eventScopeId);
  //   setAllTeamsInfo(teamsRes?.data);
  // };

  // useEffect(() => {
  //   fetchLeagueInfo();
  //   fetchAllTeams();
  // }, [id, leagueBasicInfo?.eventScopeId]);

  useEffect(() => {
    setSelectBtn(
      localStorage.getItem("activeTab")
        ? localStorage.getItem("activeTab")
        : localStorage.setItem("activeTab", "Home"),
    );
  }, []);

  return (
    <>
      <div className={`ps-2`}>
        <div className="bg-white ps-25 mb-[20px] border border-[#EEE]">
          <div className="flex gap-[75px]  items-end overflow-x-auto ">
            {data.map((data, index) => (
              <div key={index}>
                {selectBtn === `${data.title}` ? (
                  <Link
                    to="#"
                    key={index}
                    onClick={() => tabChangerHandler(data.title)}
                  >
                    <p className="cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-medium">
                      <img
                        className="w-[16px] h-[16px]"
                        src={
                          selectBtn === data.title ? data.activeIcon : data.img
                        }
                        alt=""
                      />
                      {data.title}
                    </p>
                  </Link>
                ) : (
                  <Link to="#" onClick={() => tabChangerHandler(data.title)}>
                    <p className="border-b-2 border-white cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center text-text_dark_grey ">
                      <img
                        className="w-[16px] h-[16px]"
                        src={data.img}
                        alt="data"
                      />{" "}
                      {data.title}
                    </p>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectBtn === "Home" && <Home />}{" "}
      {selectBtn === "Auction" && <Auction />}{" "}
      {selectBtn === "Team" && <Team />}
      {selectBtn === "Setting" && <Setting />}
    </>
  );
};

export default League;
