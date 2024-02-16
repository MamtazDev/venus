import { useContext, useState } from "react";
import { LeagueContext } from "../../../../contexts/LeagueInfoProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";
import { removeUserFromLeague } from "../../../../api/league";

const Roaster = () => {
  const { leagueUsersData, leagueAuctions, fetchLeagueInfo } =
    useContext(LeagueContext);

  console.log(leagueUsersData, "leagueUsersData");

  const [selectedItem, setSelectedItem] = useState(null);

  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const isMember = leagueUsersData?.find((i) => i.user?._id === user?._id);

  console.log(leagueAuctions);

  const handleRemove = (item) => {
    setSelectedItem(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setLoading(true);
        try {
          const res = await removeUserFromLeague(item?._id);
          if (res?.data?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "User has been removed from the league.",
              icon: "success",
            });
            fetchLeagueInfo();
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
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table font-sans">
          <thead className="bg-white">
            <tr className="border-0">
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Username{" "}
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Teams Purchased
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Role
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 "></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {leagueUsersData?.length > 0 &&
              leagueUsersData.map((i, index) => {
                const isBidded =
                  leagueAuctions?.filter(
                    (j) => j.price && j.owner?._id === i.user?._id,
                  ) || [];

                console.log(isBidded, "jjjj");
                return (
                  <tr key={index} className="bg-sky border border-[#F0F0F0] ">
                    <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                      {i?.userName}
                    </td>
                    <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                      {isBidded?.length}
                    </td>
                    <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                      {i?.role}
                    </td>
                    <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                      {i?.role === "Member" && isMember?.role === "Creator" && (
                        <button
                          className="p-10  border text-[#939393] border-[#E1E1E1] bg-[#F2F2F2] rounded-8"
                          onClick={() => handleRemove(i)}
                          disabled={loading}
                        >
                          {loading && selectedItem?._id === i?._id ? (
                            <div className="flex justify-center gap-3">
                              {" "}
                              <RotatingLines
                                visible={true}
                                height="18"
                                width="18"
                                strokeColor="#9aa8d1"
                                strokeWidth="5"
                                animationDuration="5"
                                ariaLabel="rotating-lines-loading"
                              />
                              Removing...
                            </div>
                          ) : (
                            "Remove"
                          )}
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roaster;
