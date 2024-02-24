import { RotatingLines } from "react-loader-spinner";
import active from "../../../assets/icons/active.png";
import NoFoundData from "../../NoFoundData/NoFoundData";

const RankingTable = ({ leagueUsersdata, loading }) => {
  const handleSort = (a, b) => {
    return b.buyIn - a.buyIn;
  };
  return (
    <>
      <div className="my-[20px]">
        <div className="overflow-x-auto">
          {loading ? (
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
          ) : (
            <table className="table">
              <thead className="bg-white">
                <tr className="border-0">
                  <th className="text-sm font-medium text-text_color1 text-center ">
                    Rank{" "}
                  </th>
                  <th className="text-sm font-medium text-text_color1 text-center">
                    Name
                  </th>
                  <th className="text-sm font-medium text-text_color1 text-center">
                    Buy In
                  </th>
                  <th className="text-sm font-medium text-text_color1 text-center">
                    Comment Payout
                  </th>
                  <th className="text-sm font-medium text-text_color1 text-center">
                    Net Return
                  </th>
                  <th className="text-sm font-medium text-text_color1 text-center"></th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {leagueUsersdata &&
                  leagueUsersdata?.length > 0 &&
                  leagueUsersdata?.sort(handleSort)?.map((item, idx) => (
                    <tr className="bg-sky border border-[#F0F0F0] " key={idx}>
                      <th className="font-medium text-sm text-text_color1 text-center">
                        {idx + 1}
                      </th>
                      <td className="font-medium text-sm text-text_color1 text-center">
                        {item?.user?.name}
                      </td>
                      <td className="font-medium text-sm text-text_color1 text-center">
                        ${(item?.buyIn).toFixed(2)}
                      </td>
                      <td className="font-medium text-sm text-text_color1 text-center">
                        ${(item?.currentPayout).toFixed(2)}
                      </td>
                      <td className="font-medium text-sm text-text_color1 text-center">
                        ${(item?.netReturn).toFixed(2)}
                      </td>
                      <td className="font-medium text-sm text-text_color1 text-center">
                        {/* <img src={active} alt="" /> */}
                      </td>
                    </tr>
                  ))}
                {leagueUsersdata?.length === 0 && <NoFoundData />}
              </tbody>
            </table>
          )}
        </div>
        {/* */}
      </div>
      <div>
        <div className="py-[10px] bg-dark_sky">
          <div className="grid lg:grid-cols-2 grid-cols-1    divide-x">
            <div className="py-[8px] flex justify-center  border-r-1 border-white">
              <p className="font-sm font-semibold text-white">
                Upcoming Games{" "}
              </p>
            </div>
            <div className="py-[8px] flex justify-center  border-r-1  border-white">
              <p className="font-sm font-semibold text-white">Date </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-[75px]">
          <NoFoundData />
        </div>
      </div>
    </>
  );
};

export default RankingTable;
