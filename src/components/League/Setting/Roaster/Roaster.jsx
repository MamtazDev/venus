import { useContext } from "react";
import { LeagueContext } from "../../../../contexts/LeagueInfoProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Roaster = () => {
  const { leagueUsersData, leagueAuctions } = useContext(LeagueContext);

  const { user } = useContext(AuthContext);

  const isMember = leagueUsersData?.find((i) => i.user?._id === user?._id);

  console.log(leagueAuctions);
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
                        <button className="p-10  border text-[#939393] border-[#E1E1E1] bg-[#F2F2F2] rounded-8">
                          Remove
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
