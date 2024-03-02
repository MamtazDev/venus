/* eslint-disable no-unused-vars */

import NoFoundData from "../../NoFoundData/NoFoundData";
import delet from "../../../assets/icons/delete.png";
import { useContext, useState } from "react";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";
import { AuthContext } from "../../../contexts/AuthProvider";
import {
  addPayout,
  deletePayoutInfo,
  getTeamPayoutInfo,
} from "../../../api/auction";
import Swal from "sweetalert2";

const Team = () => {
  const { allTeamsInfo, leagueAuctions, leagueBasicInfo, fetchAllTeams } =
    useContext(LeagueContext);

  const { user } = useContext(AuthContext);

  const [payout, setPayout] = useState(false);
  const [newPayoutData, setNewPayoutData] = useState({});
  const [loading, setLoading] = useState(false);
  const [teamPayoutInfo, setTeamPayoutInfo] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayoutData({ ...newPayoutData, [name]: value });
  };

  const handleSavePayout = async () => {
    setLoading(true);
    try {
      const res = await addPayout(newPayoutData);
      if (res?.data?.success) {
        setPayout(false);
        fetchTeamPayoutInfo({
          leagueId: newPayoutData?.leagueId,
          teamId: newPayoutData?.teamId,
          reciverId: newPayoutData?.reciverId,
        });
        fetchAllTeams();
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
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    setLoading(true);
    try {
      const res = await deletePayoutInfo(item?._id);
      if (res?.data?.success) {
        fetchTeamPayoutInfo({
          leagueId: item?.leagueId?._id,
          teamId: item?.teamId,
          reciverId: item?.reciverId?._id,
        });
        fetchAllTeams();
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
      setLoading(false);
    }
  };

  const fetchTeamPayoutInfo = async ({ leagueId, teamId, reciverId }) => {
    const response = await getTeamPayoutInfo({
      leagueId: leagueId,
      teamId: teamId,
      reciverId: reciverId,
    });
    setTeamPayoutInfo(response?.data);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-white text3 text-sm font-semibold font-sans border-y border-border2 ">
              <th className=" py-[17px] flex-grow-4 w-[30%] ps-[49px] ">
                Team
              </th>
              <th className=" py-[17px]  text-left w-[30%]">Owner</th>
              <th className=" py-[17px]  text-center">Current pay</th>
              <th className=" py-[17px]  text-left"></th>
            </tr>
          </thead>
          <tbody>
            {allTeamsInfo?.length > 0 &&
              allTeamsInfo?.map((data, index) => {
                const isBidded = leagueAuctions?.find(
                  (i) => i.team.id === data?.id && i.price,
                );

                return (
                  <tr
                    key={index}
                    className="border-y border-border2 bg-white text3 items-center"
                    style={{ color: "#222" }}
                  >
                    <td className="text-left  gap-8 items-center  ps-[49px] ">
                      {data?.name}
                    </td>
                    <td className="text-left  py-[17px]">
                      {isBidded?.owner?.name}
                    </td>
                    <td className="text-center  py-[17px]">
                      $
                      {isBidded?.payout ? isBidded?.payout?.toFixed(2) : "0.00"}
                    </td>
                    <td className="text-right pe-[34px]  py-[17px]">
                      {leagueBasicInfo?.creatorId === user?._id && (
                        <button
                          className="p-10 bg-base text-white rounded-3 customButton"
                          onClick={() => {
                            document
                              .getElementById("pay_team_modal")
                              .showModal();

                            setNewPayoutData({
                              ...newPayoutData,
                              teamId: data?.id,
                              reciverId: isBidded?.owner?._id,
                              leagueId: leagueBasicInfo?._id,
                            });
                            fetchTeamPayoutInfo({
                              teamId: data?.id,
                              reciverId: isBidded?.owner?._id,
                              leagueId: leagueBasicInfo?._id,
                            });
                          }}
                          disabled={!isBidded}
                        >
                          Pay Team
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* modal */}
      <dialog id="pay_team_modal" className="modal">
        <div className="modal-box bg-white max-w-[100%] h-[577px] rounded-3">
          <div className="modal-action mt-0 mb-[20px] flex-col justify-end text-right">
            <button
              type="button"
              className="w-[30px]"
              onClick={() => {
                setNewPayoutData({});
                document.getElementById("pay_team_modal").close();
              }}
            >
              x
            </button>
          </div>
          <div className="flex justify-between">
            <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">
              Arizona Cardinals
            </h3>
            <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">
              Total Payout: $0.00
            </h3>
          </div>
          <div>
            <button
              className="py-10 px-23 bg-base text-white rounded-3 me-[10px] customButton"
              onClick={() => setPayout(true)}
            >
              Add Payout
            </button>
            <button
              className="py-10 px-23 bg-base text-white rounded-3 customButton"
              onClick={handleSavePayout}
              disabled={
                loading || !newPayoutData?.amount || !newPayoutData?.description
              }
            >
              {loading ? "Saving..." : "Save"}
            </button>

            <div>
              {/* <button className="py-10 px-23 bg-base text-white rounded-3 me-[10px]" onClick={() => document.getElementById('add_payout').showModal()}>Add Payout</button>
                                <button className="py-10 px-23 bg-base text-white rounded-3">Save</button> */}

              <div className="overflow-x-auto">
                <table className="table mt-[40px]  border-2 border-light_sky">
                  {/* head */}
                  <thead>
                    <tr className="bg-sky text3 text-sm font-semibold font-sans border-y border-border2 ">
                      <th className=" py-[17px] flex-grow-4 w-[30%]">
                        Paid By
                      </th>
                      <th className=" py-[17px]  text-left w-[30%]">Amount</th>
                      <th className=" py-[17px]  text-left w-[30%]">
                        Description
                      </th>
                      <th className=" py-[17px]  text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamPayoutInfo &&
                      teamPayoutInfo.length > 0 &&
                      teamPayoutInfo?.map((data, index) => (
                        <>
                          <tr
                            className="border-y border-border2 bg-white text3 items-center"
                            style={{ color: "#222" }}
                            key={index}
                          >
                            <td className="text-left flex gap-8 items-center">
                              {data?.payerId?.name}
                            </td>
                            <td className="text-left  py-[17px]">
                              <div className="flex justify-center  ">
                                <div className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky">
                                  $
                                </div>
                                <input
                                  placeholder=""
                                  type="number"
                                  name="amount"
                                  value={data?.amount}
                                  className="bg-[#F4F7FE] text-left w-full ps-[18px]"
                                  readOnly
                                />
                              </div>
                            </td>
                            <td className="text-left  py-[17px]">
                              <input
                                type="text"
                                className="bg-light_sky  w-full h-[36px] ps-[22px]"
                                name="description"
                                value={data?.description}
                                readOnly
                              />
                            </td>
                            <td className="text-right  py-[17px]">
                              <button
                                className="p-10  text-white rounded-3"
                                disabled={loading}
                                onClick={() => handleDelete(data)}
                              >
                                <img src={delet} alt="" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}{" "}
                    {payout && (
                      <tr
                        className="border-y border-border2 bg-white text3 items-center"
                        style={{ color: "#222" }}
                      >
                        <td className="text-left flex gap-8 items-center">
                          {/* John Smith */}
                        </td>
                        <td className="text-left  py-[17px]">
                          <div className="flex justify-center  ">
                            <div className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky">
                              $
                            </div>
                            <input
                              placeholder=""
                              type="number"
                              name="amount"
                              min={1}
                              onChange={handleInputChange}
                              className="bg-[#F4F7FE] text-left w-full ps-[18px]"
                            />
                          </div>
                        </td>
                        <td className="text-left  py-[17px]">
                          <input
                            type="text"
                            className="bg-light_sky  w-full h-[36px] ps-[22px]"
                            name="description"
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="text-right  py-[17px]">
                          <button
                            className="p-10  text-white rounded-3"
                            onClick={() => setPayout(false)}
                          >
                            <img src={delet} alt="" />
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="pay_team_modal"
          onClick={() => document.getElementById("pay_team_modal").close()}
        >
          Close
        </label>
      </dialog>
    </div>
  );
};

export default Team;

// {payout ? (
//   <div>
//     {/* <button className="py-10 px-23 bg-base text-white rounded-3 me-[10px]" onClick={() => document.getElementById('add_payout').showModal()}>Add Payout</button>
//                     <button className="py-10 px-23 bg-base text-white rounded-3">Save</button> */}

//     <div className="overflow-x-auto">
//       <table className="table mt-[40px]  border-2 border-light_sky">
//         {/* head */}
//         <thead>
//           <tr className="bg-sky text3 text-sm font-semibold font-sans border-y border-border2 ">
//             <th className=" py-[17px] flex-grow-4 w-[30%]">
//               Paid By
//             </th>
//             <th className=" py-[17px]  text-left w-[30%]">
//               Amount
//             </th>
//             <th className=" py-[17px]  text-left w-[30%]">
//               Description
//             </th>
//             <th className=" py-[17px]  text-right"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {[1].map((data) => (
//             <>
//               <tr
//                 className="border-y border-border2 bg-white text3 items-center"
//                 style={{ color: "#222" }}
//               >
//                 <td className="text-left flex gap-8 items-center">
//                   John Smith
//                 </td>
//                 <td className="text-left  py-[17px]">
//                   <div className="flex justify-center  ">
//                     <div className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky">
//                       $
//                     </div>
//                     <input
//                       placeholder="10.00"
//                       type="number"
//                       className="bg-[#F4F7FE] text-left w-full ps-[18px]"
//                       defaultValue="10.00"
//                     />
//                   </div>
//                 </td>
//                 <td className="text-left  py-[17px]">
//                   <input
//                     type="text"
//                     className="bg-light_sky  w-full h-[36px] ps-[22px]"
//                     defaultValue=""
//                   />
//                 </td>
//                 <td className="text-right  py-[17px]">
//                   <button className="p-10  text-white rounded-3">
//                     <img src={delet} alt="" />
//                   </button>
//                 </td>
//               </tr>
//             </>
//           ))}
//           payout{" "}
//           <tr
//             className="border-y border-border2 bg-white text3 items-center"
//             style={{ color: "#222" }}
//           >
//             <td className="text-left flex gap-8 items-center">
//               John Smith
//             </td>
//             <td className="text-left  py-[17px]">
//               <div className="flex justify-center  ">
//                 <div className="text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky">
//                   $
//                 </div>
//                 <input
//                   placeholder="10.00"
//                   type="number"
//                   className="bg-[#F4F7FE] text-left w-full ps-[18px]"
//                   defaultValue="10.00"
//                 />
//               </div>
//             </td>
//             <td className="text-left  py-[17px]">
//               <input
//                 type="text"
//                 className="bg-light_sky  w-full h-[36px] ps-[22px]"
//                 defaultValue=""
//               />
//             </td>
//             <td className="text-right  py-[17px]">
//               <button className="p-10  text-white rounded-3">
//                 <img src={delet} alt="" />
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   </div>
// ) : (
//   <div className="mt-[30px]">
//     <div className="grid lg:grid-cols-3 grid-cols-1 bg-dark_sky">
//       <div className="py-16 flex justify-center  ">
//         <p className="font-sm font-semibold text-white">Paid By </p>
//       </div>
//       <div className="py-16 flex justify-center  ">
//         <p className="font-sm font-semibold text-white">Amount </p>
//       </div>
//       <div className="py-16 flex justify-center  ">
//         <p className="font-sm font-semibold text-white">
//           Description{" "}
//         </p>
//       </div>
//     </div>
//     <div className="bg-white py-[75px] border border-light_sky">
//       <NoFoundData />
//     </div>
//   </div>
// )}
