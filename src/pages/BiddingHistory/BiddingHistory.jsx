import { useEffect, useState } from "react";
import { getMyBidInfo } from "../../api/auction";
import { formatDate } from "../../utils/formatTime";

const BiddingHistory = () => {
  const [bidHistory, setBidHistory] = useState([]);

  const fetchBidHistory = async () => {
    const response = await getMyBidInfo();
    setBidHistory(response?.data);
  };

  console.log(bidHistory, "biii");

  useEffect(() => {
    fetchBidHistory();
  }, []);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-white text3 text-sm font-semibold font-sans border-y border-border2 ">
              <th className=" py-[17px] flex-grow-4 w-[60%] ps-[40px]">Team</th>
              <th className=" py-[17px]  text-left">Bid Amount</th>
              <th className=" py-[17px]  text-left">Bid Time</th>
            </tr>
          </thead>
          <tbody>
            {bidHistory?.length > 0 &&
              bidHistory?.map((data, index) => (
                <tr
                  key={index}
                  className="border-y border-border2 bg-white text3 items-center"
                  style={{ color: "#222" }}
                >
                  <td className="text-left  gap-8 items-center ps-[40px]">
                    {data?.team?.name}
                  </td>
                  <td className="text-left  py-[17px]">
                    ${data?.price.toFixed(2)}
                  </td>
                  <td className="text-left  py-[17px]">
                    {formatDate(data?.updatedAt)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BiddingHistory;
