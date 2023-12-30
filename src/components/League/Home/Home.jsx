import userIcon from "../../../assets/icons/user.svg";
import remaining from "../../../assets/icons/remaining.png";
import reward from "../../../assets/icons/reward.png";
import roi from "../../../assets/icons/roi.png";
import RankingTable from "./RankingTable";
import { useEffect, useState } from "react";
import { getLeagueInfo, getLeaguesUsersData } from "../../../api/league";
import { useParams } from "react-router-dom";

const datas = [
  {
    img: reward,
    number: "$0.00",
    text: "Prizepool",
  },
  {
    img: remaining,
    number: "0",
    text: "Remaining Teams",
  },
  {
    img: roi,
    number: "0.0%",
    text: "ROI",
  },
];

const Home = () => {
  const [leagueInfo, setLeagueInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const fetchLeagueUsersData = async () => {
    setLoading(true);
    let info = {};

    try {
      const res = await getLeaguesUsersData(id);
      if (res?.data) {
        info.leagueUsersdata = res?.data;
      }

      const leagueRes = await getLeagueInfo(id);
      if (leagueRes?.data) {
        info.leagueBasicInfo = leagueRes?.data;
      }

      if (res?.data && leagueRes?.data) {
        const user = {
          img: userIcon,
          number: res?.data?.length,
          text: "User",
        };
        const newData = [user, ...datas];
        info.datas = newData;
      }
      setLeagueInfo(info);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeagueUsersData();
  }, [id]);
  return (
    <>
      <div className="flex justify-between items-center pe-[30px] mt-[10px] mb-[30px]">
        <h2 className="text-2xl font-semibold text-text_dark_grey ">
          {leagueInfo?.leagueBasicInfo?.leagueName}
        </h2>
        <p className="text-sm  font-normal text-text_dark_grey ">
          {leagueInfo?.leagueBasicInfo?.event}-{" "}
          {leagueInfo?.leagueBasicInfo?.eventScope}
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-20 ">
        {leagueInfo?.datas?.map((data, index) => (
          <>
            <div
              key={index}
              className="flex justify-center items-center flex-col rounded-3 bg-white w-full pt-[18px] pb-[24px]"
            >
              <img className="mb-[10px]" src={data.img} alt="" />
              <h3 className="text-2xl text-text_dark_grey mb-[8px] font-semibold">
                {data.number}
              </h3>
              <p className="text-dark_sky text-sm font-normal ">{data.text}</p>
            </div>
          </>
        ))}
      </div>
      <RankingTable
        leagueUsersdata={leagueInfo?.leagueUsersdata}
        loading={loading}
      />
    </>
  );
};

export default Home;
