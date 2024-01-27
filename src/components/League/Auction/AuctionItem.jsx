import { useParams } from "react-router-dom";
import auction1 from "../../../assets/icons/auction1.png";
import { useContext } from "react";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";

const auctionData = [
  {
    img: auction1,
    title: "Alabama",
  },
  {
    img: auction1,
    title: "Houston",
  },
  {
    img: auction1,
    title: "Kansas",
  },
  {
    img: auction1,
    title: "Purdue",
  },
  {
    img: auction1,
    title: "Arizona",
  },
  {
    img: auction1,
    title: "Marquette",
  },

  {
    img: auction1,
    title: "Houston",
  },

  {
    img: auction1,
    title: "Houston",
  },

  {
    img: auction1,
    title: "UCLA",
  },
  {
    img: auction1,
    title: "Gonzaga",
  },
  {
    img: auction1,
    title: "Kansas St",
  },
  {
    img: auction1,
    title: "Xavier",
  },
  {
    img: auction1,
    title: "Indiana",
  },
  {
    img: auction1,
    title: "Tennessee",
  },
];
const AuctionItem = () => {
  const { allTeamsInfo, leagueAuctions } = useContext(LeagueContext);

  return (
    <>
      <div className="bg-white rounded-3 p-20 ">
        <div className="flex justify-between items-center mb-[15px]">
          <p className="text-base text-text_dark_grey font-semibold font-sans ">
            Action Item
          </p>
          <p className="text-base text-text_dark_grey font-semibold font-sans ">
            PrizePool:{" "}
            {leagueAuctions?.length > 0
              ? `$${leagueAuctions
                  ?.filter((i) => i.price)
                  .reduce((total, current) => total + current?.price, 0)
                  ?.toFixed(2)}`
              : "$00.00"}
          </p>
        </div>
        {/* items */}
        <div className="bg-sky_bg1 p-20">
          {allTeamsInfo &&
            allTeamsInfo?.length > 0 &&
            allTeamsInfo.map((data, index) => {
              const isBidded = leagueAuctions?.find(
                (i) => i.team.id === data?.id && i.price,
              );

              return (
                <div
                  className={`px-[8px] py-[10px] flex justify-between items-center mb-1 ${
                    isBidded &&
                    " border border-dashed border-border_grey rounded-5"
                  }`}
                >
                  <div key={index} className="flex gap-[15px] items-center ">
                    <img
                      src={data?.image_path}
                      alt="auction"
                      style={{
                        width: "27px",
                        height: "27px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <p className="text1">{data.name}</p>
                  </div>
                  {isBidded && (
                    <div>
                      <p className="text1">{isBidded?.owner?.name}</p>
                      <p className="text1">${isBidded?.price?.toFixed(2)}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default AuctionItem;
