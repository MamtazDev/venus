import { Link } from "react-router-dom";
import NoFoundData from "../../components/NoFoundData/NoFoundData";
import { useEffect, useState } from "react";
import { createLeague, getUserLeaguesInfo, joinLeague } from "../../api/league";
import Swal from "sweetalert2";
import {
  getAllPublicLeagues,
  getSeasonsByLeagueId,
} from "../../api/publicApis";
import { RotatingLines } from "react-loader-spinner";
const DashBoard = () => {
  const [userLeagueDatas, setUserLeagueDatas] = useState([]);
  const [pastLeagueDatas, setPastLeagueDatas] = useState([]);

  const [allPublicLeagues, setAllPublicLeagues] = useState([]);
  const [allPublicSeasons, setPublicSeasons] = useState([]);

  const [selectedLeague, setSelectedLeague] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [joining, setJoining] = useState(false);

  const handleLeagueChange = async (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedLeague(value);

    const res = await getSeasonsByLeagueId(value?.id);
    setPublicSeasons(res.data);
  };

  const handleSeasonChange = async (e) => {
    const value = JSON.parse(e.target.value);
    setSelectedSeason(value);
  };

  console.log(selectedLeague, "sell");

  const handleStartLeague = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target;

    const leagueName = form.leagueName.value;
    const event = selectedLeague?.name;
    const eventId = selectedLeague?.id;
    const eventScope = selectedSeason?.name;
    const eventScopeId = selectedSeason?.id;

    const data = {
      leagueName,
      event,
      eventScope,
      eventId,
      eventScopeId,
    };

    try {
      const res = await createLeague(data);
      if (res?.data?.success) {
        document.getElementById("my_modal_1").close();
        Swal.fire({
          icon: "Success",
          title: "Successfull!",
          text: "League created successfully!",
        });
        fetchUserLeagueInfo();
        form.reset();
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error?.response?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleJoinLeague = async (e) => {
    e.preventDefault();

    setJoining(true);

    const inviteCode = e.target.inviteCode.value;

    try {
      const res = await joinLeague(inviteCode);
      if (res?.data?.success) {
        document.getElementById("my_modal_2").close();
        Swal.fire({
          icon: "Success",
          title: "Successfull!",
          text: "League joined successfully!",
        });
        fetchUserLeagueInfo();
        e.target.reset();
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error?.response?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      }
    } finally {
      setJoining(false);
    }
  };

  const [loading, setLoading] = useState(false);

  const fetchUserLeagueInfo = async () => {
    setLoading(true);
    const res = await getUserLeaguesInfo();
    if (res?.data) {
      setUserLeagueDatas(res?.data);
      setLoading(false);
    }
  };

  const fetchPublicLeagueInfo = async () => {
    const res = await getAllPublicLeagues();
    setAllPublicLeagues(res?.data);
  };

  useEffect(() => {
    fetchUserLeagueInfo();
    fetchPublicLeagueInfo();
  }, []);
  return (
    <div>
      {/* header */}
      <div className="flex lg:flex-row flex-col  lg:justify-between justify-center  lg:gap-0 gap-20 items-center mb-[30px]">
        <div>
          <p className="text-sm  font-normal text-text_dark_grey lg:text-left text-center">
            Welcome
          </p>
          <h2 className="text-2xl text-text_dark_grey   font-semibold ">
            John Smith
          </h2>
        </div>
        <div className="flex gap-10 flex-wrap">
          <button
            className=" lg:py-14 py-12  lg:px-20 px-10 bg-base text-white rounded-[3px] text-sm font-semibold customButton"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Start a League
          </button>
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="lg:py-14 py-12  lg:px-20 px-10 bg-base text-white rounded-[3px] text-sm font-semibold customButton"
          >
            Join a League
          </button>
        </div>
      </div>
      {/* active league */}
      <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white mb-[40px]">
        <h2 className="lg:text-[28px] text-[20px] font-bold mb-5 ">
          Active League
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#F4F7FE]">
              <tr className="border-0">
                <th className="text-sm font-medium text-text_color1 ">
                  League Name
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Buy In
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Current Payout
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Net Return
                </th>
              </tr>
            </thead>
            {userLeagueDatas?.length > 0 &&
              userLeagueDatas?.map((item, idx) => (
                <tbody className="min-h-[186px] w-full" key={idx}>
                  <tr className="bg-base-200 border border-[#F0F0F0] ">
                    <th className="font-medium text-sm text-text_color1 ">
                      <Link to={`/league/${item?.league?._id}`}>
                        {item?.league?.leagueName}
                      </Link>
                    </th>
                    <td className="font-medium text-sm text-text_color1 ">
                      ${(item?.league?.buyIn).toFixed(2)}
                    </td>
                    <td className="font-medium text-sm text-text_color1 ">
                      ${(item?.league?.currentPayout).toFixed(2)}
                    </td>
                    <td className="font-medium text-sm text-text_color1 ">
                      {" "}
                      ${(item?.league?.netReturn).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100px",
              }}
            >
              <RotatingLines
                visible={true}
                height="50"
                width="50"
                strokeColor="#9aa8d1"
                strokeWidth="5"
                animationDuration="5"
                ariaLabel="rotating-lines-loading"
              />
            </div>
          )}

          {userLeagueDatas?.length === 0 && !loading && (
            <>
              <NoFoundData />
            </>
          )}
        </div>
      </div>
      <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white">
        <h2 className="lg:text-[28px] text-[20px] font-bold">Past League</h2>
        <p className="text-text_color2 text-sm font-medium mb-5">
          Active League
        </p>
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-[#F4F7FE]">
              <tr className="border-0">
                <th className="text-sm font-medium text-text_color1 ">
                  League Name
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Buy In
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Current Payout
                </th>
                <th className="text-sm font-medium text-text_color1 ">
                  Net Return
                </th>
              </tr>
            </thead>
            {pastLeagueDatas.length !== 0 && (
              <tbody className="min-h-[186px] w-full">
                <tr className="bg-base-200 border border-[#F0F0F0] ">
                  <th className="font-medium text-sm text-text_color1 ">
                    Cricket
                  </th>
                  <td className="font-medium text-sm text-text_color1 ">
                    $10.00
                  </td>
                  <td className="font-medium text-sm text-text_color1 ">
                    $0.00
                  </td>
                  <td className="font-medium text-sm text-text_color1 ">
                    {" "}
                    -$10.00
                  </td>
                </tr>
              </tbody>
            )}
          </table>

          {pastLeagueDatas.length === 0 && (
            <>
              <NoFoundData />
            </>
          )}
        </div>
      </div>
      {/* start league modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-white h-[630px] rounded-3">
          <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">
            Start a league
          </h3>
          <hr className="border-t border-border_grey mx-[40px] mb-[50px]" />

          <form onSubmit={handleStartLeague} className="px-[76px]">
            <label className=" form-control">
              <div className="label">
                <span
                  className="label-text text-base font-medium text-[#000] font-sans"
                  style={{ color: "#000" }}
                >
                  Event
                </span>
              </div>
              <select
                name="event"
                className="w-full select border-none bg-sky_bg2 border border-border2 opacity-[0.3] mt-[2px]"
                onChange={handleLeagueChange}
              >
                <option selected disabled>
                  Select league
                </option>
                {allPublicLeagues &&
                  allPublicLeagues?.length > 0 &&
                  allPublicLeagues?.map((item, idx) => (
                    <option key={idx} value={JSON.stringify(item)}>
                      {item?.name}
                    </option>
                  ))}
              </select>
            </label>
            <label className=" form-control mt-[20px]">
              <div className="label">
                <span
                  className="label-text p-[2px] text-base font-medium text-[#000] font-sans"
                  style={{ color: "#000" }}
                >
                  Event Scope
                </span>
              </div>
              <select
                name="eventScope"
                className="w-full select border-none bg-sky_bg2 border border-border2 opacity-[0.3] mt-[2px]"
                onChange={handleSeasonChange}
              >
                <option selected disabled>
                  Select season
                </option>
                {allPublicSeasons && allPublicSeasons?.length > 0 ? (
                  allPublicSeasons?.map((item, idx) => (
                    <option key={idx} value={JSON.stringify(item)}>
                      {item?.name}
                    </option>
                  ))
                ) : (
                  <option disabled>No season found</option>
                )}
              </select>
            </label>
            <div className=" mt-[20px]">
              <label
                className=" text-base font-medium text-[#000] font-sans"
                style={{ color: "#000" }}
              >
                League Name
              </label>
              <input
                name="leagueName"
                type="text"
                placeholder="League Name"
                className="bg-sky_bg2 w-full input_field input input-bordered mt-[10px]  border  border-[#EEE]"
                required
              />
            </div>

            <div className="modal-action flex-col">
              <button
                type="submit"
                className="bg-base py-10 w-full rounded-3 mt-[30px] text-white font-semibold"
                disabled={isLoading || !selectedLeague || !selectedSeason}
              >
                {isLoading ? "Creating..." : "Submit"}
              </button>
            </div>

            <div className="text-center lg:py-14 py-10">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_1").close();
                  document.getElementById("my_modal_2").showModal();
                }}
                className="text-center font-normal text-base font-sans text-text_dark_grey"
              >
                Join a League
              </button>
            </div>
          </form>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_1"
          onClick={() => document.getElementById("my_modal_1").close()}
        >
          Close
        </label>
      </dialog>

      {/* join league modal */}

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white h-[621px] rounded-3">
          <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">
            Start a league
          </h3>
          <hr className="border-t border-border_grey mx-[40px] mb-[50px]" />

          <form className="px-[52px]" onSubmit={handleJoinLeague}>
            <div className=" mt-[20px]">
              <label className=" text-base font-medium text-[#00000] font-sans">
                Invite Code
              </label>
              <input
                name="inviteCode"
                type="text"
                placeholder="Insert code"
                className="bg-sky_bg2 w-full input_field input input-bordered mt-[10px] border border-border2"
                required
              />
            </div>

            <div className="modal-action flex-col">
              <button
                type="submit"
                className="bg-base py-10 w-full rounded-3 text-white"
                disabled={joining}
              >
                {joining ? "Joining..." : "Submit"}
              </button>
            </div>

            <div className="text-center py-14">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("my_modal_2").close();
                  document.getElementById("my_modal_1").showModal();
                }}
                className="text-center"
              >
                Start a League
              </button>
            </div>
          </form>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_2"
          onClick={() => document.getElementById("my_modal_2").close()}
        >
          Close
        </label>
      </dialog>
    </div>
  );
};

export default DashBoard;
