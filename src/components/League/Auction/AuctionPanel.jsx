/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import auction1 from "../../../assets/icons/auction1.png";
import BidMember from "./BidMember";
import Message from "./Message";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";
import toast from "react-hot-toast";
import { formatTime } from "../../../utils/formatTime";
import { AuthContext } from "../../../contexts/AuthProvider";

const AuctionPanel = () => {
  const {
    allTeamsInfo,
    auctionSettings,
    selectedTeam,
    setSelectedTeam,
    leagueUsersData,
  } = useContext(LeagueContext);

  const { user } = useContext(AuthContext);

  const [seconds, setSeconds] = useState(0);
  const [bidAmount, setBidAmount] = useState(null);
  const [bidderInfo, setBidderInfo] = useState(null);

  const startTimer = () => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(timer);

          handleTimerEnd();

          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  };

  const handleTimerEnd = () => {
    console.log("Timer ended!");
  };

  const handleSelectTeam = (data) => {
    setSelectedTeam(data);
    document.getElementById("admin_modal").close();
    setSeconds(auctionSettings?.auctionTime);
    startTimer();
  };

  const handleBidButtonClick = () => {
    if (
      bidAmount < auctionSettings?.minimumBid ||
      bidderInfo?.amount > bidAmount
    ) {
      toast.error("Bid rejected");
    } else {
      setSeconds(auctionSettings?.auctionTime);
      setBidderInfo({
        bidderName: user?.name,
        bidderId: user?._id,
        amount: bidAmount,
      });
      setBidAmount(null);
    }
  };

  console.log(user, "user");
  return (
    <>
      <div className="px-20 pt-[24px] pb-20 bg-white rounded-3">
        <div className="flex flex-col lg:flex-row lg:gap-0 gap-20 justify-between items-center">
          {selectedTeam && (
            <div className="flex items-center gap-8">
              <img
                src={selectedTeam?.image_path}
                alt=""
                style={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <p className="text-lg font-semibold text-text_dark_grey">
                {selectedTeam?.name}
              </p>
            </div>
          )}
          {/* buttons */}
          <div className="flex gap-10 flex-wrap">
            <button
              className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3"
              onClick={() => document.getElementById("admin_modal").showModal()}
            >
              Admin Panel
            </button>
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3">
              Next Item ( Random)
            </button>
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3">
              Reset Clock
            </button>
          </div>
        </div>
        {/* bid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="h-[93px] p-15  border border-[#EEE] mt-[20px]">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal font-sans  text-[#9AA8D1] ">
                High Bid
              </p>
              <p className="text-sm font-normal font-sans  text-dark_sky ">
                By
              </p>
            </div>
            <div className=" flex justify-between items-center mt-[15px]">
              <p className="text-xl font-medium font-sans text-text_dark_grey ">
                ${bidderInfo?.amount ? bidderInfo?.amount?.toFixed(2) : "00.00"}
              </p>
              <p className="text-xl font-medium font-sans text-text_dark_grey ">
                {bidderInfo?.bidderName ? bidderInfo?.bidderName : "N/A"}
              </p>
            </div>
          </div>
          <div className="h-[93px] p-15 border border-[#EEE] mt-[20px]">
            <div className="flex  items-center justify-between">
              <div>
                <p className="text-sm font-normal font-sans text-dark_sky mb-[15px]">
                  Time Remaining
                </p>
                <p className="text-xl font-medium font-sans text-text_dark_grey ">
                  {formatTime(seconds)}
                </p>
              </div>
              {bidderInfo && (
                <button
                  onClick={() => {
                    setBidderInfo(null);
                    setBidAmount(null);
                  }}
                  className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3"
                >
                  Undo
                </button>
              )}
            </div>
          </div>
          {/*  */}
          <div className="h-[110px] p-15  border border-[#EEE] ">
            <div className="flex justify-between items-center">
              <p className="text-sm font-normal font-sans  text-[#9AA8D1] ">
                Total Spent
              </p>
              <p className="text-xl font-medium font-sans  text-text_dark_grey ">
                $00.00
              </p>
            </div>
          </div>
          <div className="h-[110px] p-15  border border-[#EEE] ">
            <div className="flex justify-center  ">
              {/* <div className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky"> */}
              <button
                disabled={!bidAmount || seconds === 0}
                className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-base disabled:bg-dark_sky"
              >
                $
              </button>
              <input
                type="number"
                className="bg-light_sky text-center w-full"
                min="1"
                defaultValue={1}
                onChange={(e) => setBidAmount(Number(e.target.value))}
              />
              <button
                disabled={!bidAmount || seconds === 0}
                className="text-[12px] font-semibold text-white px-[29px] py-[11px]  bg-base  disabled:bg-dark_sky "
                onClick={handleBidButtonClick}
              >
                Bid
              </button>
            </div>
            <button
              className="w-full bg-base text-white p-10 mt-[10px]"
              onClick={() => document.getElementById("show_rules").showModal()}
            >
              Show Rules
            </button>
          </div>
        </div>
      </div>
      <BidMember leagueUsersData={leagueUsersData} />
      {/*  ijmessage  */}
      <Message />
      {/* admin panel modal start */}

      <dialog id="admin_modal" className="modal">
        <div className="modal-box bg-white  max-w-[100%] h-[100%] rounded-3">
          <div className="modal-action mt-0  flex-col justify-end text-right">
            {/* <form> */}
            <button
              type="button"
              className="w-[30px]"
              onClick={() => document.getElementById("admin_modal").close()}
            >
              x
            </button>
            {/* </form> */}
          </div>
          <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px]">
            Admin Panel
          </h3>
          <div className="flex  justify-around">
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3">
              Admin Panel
            </button>
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3">
              Next Item ( Random)
            </button>
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3">
              Reset Clock
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="table mt-[40px]  border-2 border-light_sky">
              {/* head */}
              <thead>
                <tr className="bg-sky text3 text-sm font-semibold font-sans border-y border-border2 ">
                  <th className=" py-[17px] flex-grow-4 w-[30%] ps-[40px]">
                    Team
                  </th>
                  <th className=" py-[17px]  text-left w-[30%]">Owner</th>
                  <th className=" py-[17px]  text-left">Price</th>
                  <th className=" py-[17px]  text-left"></th>
                </tr>
              </thead>
              <tbody>
                {allTeamsInfo &&
                  allTeamsInfo?.length > 0 &&
                  allTeamsInfo?.map((data, index) => (
                    <tr
                      key={index}
                      className="border-y border-border2 bg-white text3 items-center"
                      style={{ color: "#222" }}
                    >
                      <td className="ps-[40px] text-left  gap-8 items-center">
                        {data?.name}
                      </td>
                      <td className="text-left  py-[17px]"></td>
                      <td className="text-left  py-[17px]">$0.00</td>
                      <td className="text-right  py-[17px]">
                        <button
                          className="p-10 bg-base text-white rounded-3"
                          onClick={() => handleSelectTeam(data)}
                        >
                          Set Next Item
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-center mt-[50px]">
              <button className="py-10 px-23 bg-base text-white rounded-3">
                Reset All Auction Data
              </button>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="admin_modal"
          onClick={() => document.getElementById("admin_modal").close()}
        >
          Close
        </label>
      </dialog>
      {/* admin panel modal end */}

      {/* show rules modal start */}
      <dialog id="show_rules" className="modal">
        <div className="modal-box bg-white max-w-[100%] h-[100%] rounded-3">
          <div className="modal-action mt-0  flex-col justify-end text-right">
            <form>
              <button
                type="button"
                className="w-[30px]"
                onClick={() => document.getElementById("show_rules").close()}
              >
                x
              </button>
            </form>
          </div>
          <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">
            Show Rules
          </h3>
          <hr className="h-[0.5px]  border-[#C8CBD9] mb-[30px]" />
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr className="bg-sky  border-[#E1E1E1] flex justify-between items-center w-full ps-[24px]">
                  <td className="font-medium font-sans text-sm text-text_color1 ">
                    Auction Timer
                  </td>
                  <td className="font-medium text-sm text-text_color1 ">
                    <input
                      type="text"
                      defaultValue="15 Seconds"
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="15 Seconds"
                    />
                  </td>
                </tr>
                <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
                  <td className="font-medium font-sans text-sm text-text_color1 ">
                    Minimum Buy In
                  </td>
                  <td className="font-medium text-sm text-text_color1 ">
                    <input
                      type="text"
                      defaultValue="$ 5"
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="$ 5"
                    />
                  </td>
                </tr>
                <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
                  <td className="font-medium font-sans text-sm text-text_color1 ">
                    Allow Unsold Teams
                  </td>
                  <td className="font-medium text-sm text-text_color1 ">
                    <input
                      type="text"
                      defaultValue="No"
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="No"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="show_rules"
          onClick={() => document.getElementById("show_rules").close()}
        >
          Close
        </label>
      </dialog>

      {/* show rules modal end */}
    </>
  );
};

export default AuctionPanel;
