/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import auction1 from "../../../assets/icons/auction1.png";
import BidMember from "./BidMember";
import Message from "./Message";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";
import toast from "react-hot-toast";
import { formatTime } from "../../../utils/formatTime";
import { AuthContext } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { createAuction, setTeamOwner } from "../../../api/auction";
import { addNotification } from "../../../api/notificationApi";

import io from "socket.io-client";

const AuctionPanel = () => {
  const {
    allTeamsInfo,
    auctionSettings,
    selectedTeam,
    setSelectedTeam,
    leagueUsersData,
    leagueBasicInfo,
    leagueAuctions,
    fetchAllTeams,
    fetchLeagueAuctions,
    fetchLeagueInfo,
    auctionMessages,
    fetchLeagueMessages,
    setAuctionMessages,
  } = useContext(LeagueContext);

  const { user } = useContext(AuthContext);

  const [seconds, setSeconds] = useState(0);
  const [bidAmount, setBidAmount] = useState(null);
  const [bidderInfo, setBidderInfo] = useState(null);
  const [socketUser, setSocketUser] = useState([]);
  const [settingTeam, setSettingTeam] = useState(false);

  const bidderInfoRef = useRef(bidderInfo);

  const myTeams = leagueAuctions?.filter((i) => i.owner?._id === user?._id);

  const socket = io(`${import.meta.env.VITE_BASE_URL}`);

  socket.on("connection", () => {
    console.log("Connected to socket server");
  });

  useEffect(() => {
    socket.emit("addUser", user._id, leagueBasicInfo?._id);
    socket.on("getUsers", (users) => {
      console.log("getUsers", users);
      const leagueActiveUsers = users.filter(
        (i) => i.leagueId === leagueBasicInfo?._id,
      );
      setSocketUser(leagueActiveUsers);
    });

    socket.on("getHigherBid", (addHigher) => {
      console.log("getHigherBid", addHigher);
      setBidAmount(addHigher);
    });

    socket.on("message", (msg) => {
      console.log("message", msg);
      const newMessages = msg.filter(
        (m) => m.leagueId === leagueBasicInfo?._id,
      );

      setAuctionMessages((current) => [
        ...current,
        newMessages[newMessages.length - 1]?.msg,
      ]);
    });

    socket.on("counter", (count) => {
      if (count === "Auction End") {
        handleTimerEnd();
      } else {
        setSeconds(count);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const startTimer = () => {
    socket.emit(
      "startTimer",
      leagueBasicInfo?._id,
      auctionSettings?.auctionTime,
    );
  };

  const handleTimerEnd = async () => {
    // const info = {
    //   owner: bidderInfoRef.current?.bidderId,
    //   price: bidderInfoRef.current?.amount,
    // };
    // console.log(info, "info");

    try {
      const res = await setTeamOwner({
        auctionId: bidderInfoRef.current?.auctionId,
        data: {
          owner: bidderInfoRef.current?.bidderId,
          price: bidderInfoRef.current?.amount,
        },
      });

      const notificationData = {
        leagueId: leagueBasicInfo?._id,
        leagueCreatorId: leagueBasicInfo?.creatorId,
        message: `${bidderInfoRef.current?.bidderName} bid ${bidderInfoRef.current?.amount} for ${selectedTeam?.name}`,
      };

      const notificationRes = await addNotification(notificationData);

      if (res?.data?.success) {
        fetchAllTeams();
        fetchLeagueAuctions();
        fetchLeagueInfo();
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleSelectTeam = async (data) => {
    setSettingTeam(true);
    const info = {
      leagueId: leagueBasicInfo?._id,
      team: data,
    };

    try {
      const res = await createAuction(info);
      if (res?.data?.success) {
        setSelectedTeam(data);
        document.getElementById("admin_modal").close();
        // setSeconds(auctionSettings?.auctionTime);
        fetchLeagueAuctions();

        startTimer();
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setSettingTeam(false);
    }
  };

  const handleBidButtonClick = () => {
    if (
      bidAmount < auctionSettings?.minimumBid ||
      bidderInfo?.amount > bidAmount ||
      leagueAuctions[0]?.price > bidAmount
    ) {
      toast.error("Bid rejected");
    } else {
      // setSeconds(auctionSettings?.auctionTime);
      startTimer();
      setBidderInfo({
        bidderName: user?.name,
        bidderId: user?._id,
        amount: bidAmount,
      });
      bidderInfoRef.current = {
        bidderName: user?.name,
        bidderId: user?._id,
        amount: bidAmount,
        auctionId: leagueAuctions[0]?._id,
      };
      setBidAmount(null);
    }
  };

  const handleResetClock = () => {
    document.getElementById("admin_modal").close();
    // setSeconds(auctionSettings?.auctionTime);
    if (seconds === 0) {
      startTimer();
    }
  };

  const highBitHandler = (e) => {
    socket.emit("addHigherBid", Number(e.target.value));
  };

  // const filteredTeam = allTeamsInfo?.filter((i) =>
  //   leagueAuctions?.find((j) => i.id !== j.team?.id),
  // );

  const handleRandomItem = async () => {
    const filteredTeam = allTeamsInfo?.filter(
      (team) => !leagueAuctions.some((auction) => auction.team.id === team.id),
    );

    const randomIndex = Math.floor(Math.random() * filteredTeam?.length);
    const selectedObject = filteredTeam[randomIndex];

    setSettingTeam(true);
    const info = {
      leagueId: leagueBasicInfo?._id,
      team: selectedObject,
    };
    try {
      const res = await createAuction(info);
      if (res?.data?.success) {
        setSelectedTeam(selectedObject);
        // setSeconds(auctionSettings?.auctionTime);
        startTimer();
        document.getElementById("admin_modal").close();
      }
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      setSettingTeam(false);
    }
  };

  useEffect(() => {
    fetchLeagueInfo();
  }, [socketUser]);

  // console.log(bidderInfoRef, "hjkhjk");

  // useEffect(() => {
  //   bidderInfoRef.current = bidderInfo;
  // }, [bidderInfo]);

  // useEffect(() => {
  //   if (bidderInfo) {
  //     // startTimer();
  //   }
  // }, [bidderInfo]);

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
          {leagueBasicInfo?.creatorId === user?._id && (
            <div className="flex gap-10 flex-wrap">
              <button
                className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 disabled:bg-dark_sky customButton"
                onClick={() =>
                  document.getElementById("admin_modal").showModal()
                }
                disabled={seconds > 0}
              >
                Admin Panel
              </button>
              <button
                className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 disabled:bg-dark_sky customButton"
                disabled={seconds > 0 || settingTeam}
                onClick={handleRandomItem}
              >
                Next Item ( Random)
              </button>
              <button
                className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 disabled:bg-dark_sky customButton"
                onClick={handleResetClock}
                disabled={!selectedTeam}
              >
                Reset Clock
              </button>
            </div>
          )}
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
                $
                {/* {bidderInfo?.amount
                  ? bidderInfo?.amount?.toFixed(2)
                  : leagueAuctions?.length > 0 && leagueAuctions[0]?.price
                    ? leagueAuctions[0].price.toFixed(2)
                    : "00.00"} */}{" "}
                {bidAmount}
              </p>
              <p className="text-xl font-medium font-sans text-text_dark_grey ">
                {bidderInfo?.bidderName
                  ? bidderInfo?.bidderName
                  : leagueAuctions?.length > 0 && leagueAuctions[0]?.owner?.name
                    ? leagueAuctions[0]?.owner?.name
                    : "N/A"}
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
                  className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 customButton"
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
                {myTeams?.length > 0
                  ? `$${myTeams
                      ?.reduce((total, current) => total + current?.price, 0)
                      .toFixed(2)}`
                  : "$00.00"}
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
                // onChange={(e) => setBidAmount(Number(e.target.value))}
                onChange={(e) => highBitHandler(e)}
              />
              <button
                disabled={!bidAmount || seconds === 0}
                className="text-[12px] font-semibold text-white px-[29px] py-[11px]  bg-base  disabled:bg-dark_sky customButton"
                onClick={handleBidButtonClick}
              >
                Bid
              </button>
            </div>
            <button
              className="w-full bg-base text-white p-10 mt-[10px] customButton"
              onClick={() => document.getElementById("show_rules").showModal()}
            >
              Show Rules
            </button>
          </div>
        </div>
      </div>
      <BidMember
        socketUser={socketUser}
        leagueUsersData={leagueUsersData}
        user={user}
        leagueAuctions={leagueAuctions}
      />
      {/*  ijmessage  */}
      <Message
        leagueBasicInfo={leagueBasicInfo}
        auctionMessages={auctionMessages}
        fetchLeagueMessages={fetchLeagueMessages}
        setAuctionMessages={setAuctionMessages}
        socket={socket}
      />
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
            <button className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 customButton">
              Admin Panel
            </button>
            <button
              className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 customButton"
              onClick={handleRandomItem}
              disabled={seconds > 0 || settingTeam}
            >
              Next Item ( Random)
            </button>
            <button
              className="py-10 px-23 bg-base text-[12px] font-semibold text-white font-sans rounded-3 customButton"
              onClick={handleResetClock}
              disabled={!selectedTeam}
            >
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
                  allTeamsInfo?.map((data, index) => {
                    const isBidded = leagueAuctions?.find(
                      (i) => i.team.id === data?.id,
                    );

                    return (
                      <tr
                        key={index}
                        className="border-y border-border2 bg-white text3 items-center"
                        style={{ color: "#222" }}
                      >
                        <td className="ps-[40px] text-left  gap-8 items-center">
                          {data?.name}
                        </td>
                        <td className="text-left  py-[17px]">
                          {isBidded ? isBidded?.owner?.name : ""}
                        </td>
                        <td className="text-left  py-[17px]">
                          {isBidded?.price
                            ? `$${isBidded?.price?.toFixed(2)}`
                            : "$0.00"}{" "}
                        </td>
                        <td className="text-right  py-[17px]">
                          {isBidded ? (
                            <button
                              className="p-10 bg-[#ff2500] text-white rounded-3"
                              // onClick={() => handleSelectTeam(data)}
                              // disabled={settingTeam}
                            >
                              Reset
                            </button>
                          ) : (
                            <button
                              className="p-10 bg-base text-white rounded-3 customButton"
                              onClick={() => handleSelectTeam(data)}
                              disabled={settingTeam}
                            >
                              {settingTeam && selectedTeam?.id === data?.id
                                ? "Loading..."
                                : "Set Next Item"}
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
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
                      value={`${auctionSettings?.auctionTime} Seconds`}
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="15 Seconds"
                      readOnly
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
                      value={`$ ${auctionSettings?.minimumBid}`}
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="$ 5"
                      readOnly
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
                      value={auctionSettings?.allowUnslodTeams ? "Yes" : "No"}
                      className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                      placeholder="No"
                      readOnly
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
