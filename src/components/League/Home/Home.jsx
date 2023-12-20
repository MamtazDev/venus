import user from "../../../assets/icons/user.svg";
import remaining from "../../../assets/icons/remaining.png";
import reward from "../../../assets/icons/reward.png";
import roi from "../../../assets/icons/roi.png";
import RankingTable from "./RankingTable";

const datas = [
  {
    img: user,
    number: "02",
    text: "User",
  },
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
  return (
    <>
      <div className="flex justify-between items-center pe-[30px] mt-[10px] mb-[30px]">
        <h2 className="text-2xl font-semibold text-text_dark_grey ">Cricket</h2>
        <p className="text-sm  font-normal text-text_dark_grey ">
          23-24 NFL- Full Season
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-20 ">
        {datas.map((data, index) => (
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
      <RankingTable />
    </>
  );
};

export default Home;
