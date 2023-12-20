import active from "../../../assets/icons/active.png";
import NoFoundData from "../../NoFoundData/NoFoundData";

const RankingTable = () => {
  return (
    <>
      <div className="my-[20px]">
        <div className="overflow-x-auto">
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
              <tr className="bg-sky border border-[#F0F0F0] ">
                <th className="font-medium text-sm text-text_color1 text-center">
                  1
                </th>
                <td className="font-medium text-sm text-text_color1 text-center">
                  John Smith
                </td>
                <td className="font-medium text-sm text-text_color1 text-center">
                  $0.00
                </td>
                <td className="font-medium text-sm text-text_color1 text-center">
                  $0.00
                </td>
                <td className="font-medium text-sm text-text_color1 text-center">
                  $0.00
                </td>
                <td className="font-medium text-sm text-text_color1 text-center">
                  <img src={active} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
