import userIcon from "../../../assets/icons/user.svg";
import remaining from "../../../assets/icons/remaining.png";
import reward from "../../../assets/icons/reward.png";
import roi from "../../../assets/icons/roi.png";
import RankingTable from "./RankingTable";
import { useContext, useEffect, useState } from "react";
import { getLeagueInfo, getLeaguesUsersData } from "../../../api/league";
import { useParams } from "react-router-dom";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";

const Home = () => {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    allTeamsInfo,
    leagueAuctions,
    leagueUsersData,
    leagueBasicInfo,
    loadingInfo,
  } = useContext(LeagueContext);

  const remainingTeam =
    allTeamsInfo?.filter(
      (team) =>
        !leagueAuctions?.some(
          (auction) => auction.team.id === team.id && auction.price,
        ),
    ) || [];
  return (
    <>
      <div className="flex justify-between items-center pe-[30px] mt-[10px] mb-[30px]">
        <h2 className="text-2xl font-semibold text-text_dark_grey ">
          {leagueBasicInfo?.leagueName}
        </h2>
        <p className="text-sm  font-normal text-text_dark_grey ">
          {leagueBasicInfo?.event}- {leagueBasicInfo?.eventScope}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-20 ">
        {/* {leagueInfo?.datas?.map((data, index) => (
          <> */}
        <div className="flex justify-center items-center flex-col rounded-3 bg-white w-full pt-[18px] pb-[24px]">
          <img className="mb-[10px]" src={userIcon} alt="" />
          <h3 className="text-2xl text-text_dark_grey mb-[8px] font-semibold">
            {leagueUsersData?.length}
          </h3>
          <p className="text-dark_sky text-sm font-normal ">User</p>
        </div>
        <div className="flex justify-center items-center flex-col rounded-3 bg-white w-full pt-[18px] pb-[24px]">
          <img className="mb-[10px]" src={reward} alt="" />
          <h3 className="text-2xl text-text_dark_grey mb-[8px] font-semibold">
            {leagueAuctions
              ? `$${leagueAuctions
                  ?.filter((i) => i.price)
                  ?.reduce((total, current) => total + current?.price, 0)
                  .toFixed(2)}`
              : "$0.00"}
          </h3>
          <p className="text-dark_sky text-sm font-normal ">Prizepool</p>
        </div>
        <div className="flex justify-center items-center flex-col rounded-3 bg-white w-full pt-[18px] pb-[24px]">
          <img className="mb-[10px]" src={remaining} alt="" />
          <h3 className="text-2xl text-text_dark_grey mb-[8px] font-semibold">
            {remainingTeam?.length ?? 0}
          </h3>
          <p className="text-dark_sky text-sm font-normal "> Remaining Teams</p>
        </div>
        <div className="flex justify-center items-center flex-col rounded-3 bg-white w-full pt-[18px] pb-[24px]">
          <img className="mb-[10px]" src={roi} alt="" />
          <h3 className="text-2xl text-text_dark_grey mb-[8px] font-semibold">
            0.0%
          </h3>
          <p className="text-dark_sky text-sm font-normal ">ROI</p>
        </div>
        {/* </>
        ))} */}
      </div>
      <RankingTable
        leagueUsersdata={leagueUsersData}
        loading={
          // loadingInfo.leagueInfo ||
          // loadingInfo.allTeamsInfo ||
          // loadingInfo.leagueAuctionInfo
          false
        }
      />
    </>
  );
};

export default Home;
