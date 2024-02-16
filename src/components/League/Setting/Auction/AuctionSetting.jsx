import { useContext, useEffect, useState } from "react";
import { LeagueContext } from "../../../../contexts/LeagueInfoProvider";
import { updateLeagueAuctionSettings } from "../../../../api/auction";
import Swal from "sweetalert2";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../../contexts/AuthProvider";

const AuctionSetting = () => {
  const { auctionSettings, setAutionSettings, leagueBasicInfo } =
    useContext(LeagueContext);
  const { user } = useContext(AuthContext);

  const [settings, setSettings] = useState({});
  const [editingInfo, setEditingInfo] = useState({});

  const [loading, setLoading] = useState(false);

  console.log(auctionSettings, "handleSave");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: Number(value) });
    setEditingInfo({ ...editingInfo, [name]: Number(value) });
  };

  const handleCheckboxChange = () => {
    setSettings({ ...settings, allowUnslodTeams: !settings?.allowUnslodTeams });
    setEditingInfo({
      ...editingInfo,
      allowUnslodTeams: !settings?.allowUnslodTeams,
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await updateLeagueAuctionSettings({
        id: auctionSettings?._id,
        data: editingInfo,
      });
      if (res?.data?.success) {
        setAutionSettings(res?.data?.data);
        Swal.fire({
          icon: "success",
          title: "Successfull!",
          text: "Auction settings update successfully!",
        });
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

  useEffect(() => {
    const info = {
      auctionTime: auctionSettings?.auctionTime,
      minimumBid: auctionSettings?.minimumBid,
      minimumBuyin: auctionSettings?.minimumBuyin,
      maximumBuyin: auctionSettings?.maximumBuyin,
      allowUnslodTeams: auctionSettings?.allowUnslodTeams,
    };
    setSettings(info);
  }, [auctionSettings]);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-white">
            <tr className="border-0 flex justify-between w-full ">
              <th className="text-sm font-medium text-text_color1 py-[16px] px-[40px]">
                Rule{" "}
              </th>
              <th className="text-sm font-medium text-text_color1 "></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full ps-[24px]">
              <td className="font-medium font-sans text-sm text-text_color1 ">
                Auction Timer
              </td>
              <td className="font-medium text-sm text-text_color1 ">
                <input
                  name="auctionTime"
                  type="number"
                  value={settings?.auctionTime}
                  className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                  placeholder="15 Seconds"
                  min="1"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
              <td className="font-medium font-sans text-sm text-text_color1 ">
                Minimum Bid
              </td>
              <td className="font-medium text-sm text-text_color1 ">
                <input
                  type="number"
                  name="minimumBid"
                  value={settings?.minimumBid}
                  className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                  placeholder="$ 1"
                  min="1"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
              <td className="font-medium font-sans text-sm text-text_color1 ">
                Minimum Buy In
              </td>
              <td className="font-medium text-sm text-text_color1 ">
                <input
                  type="number"
                  name="minimumBuyin"
                  value={settings?.minimumBuyin}
                  className="p-10 bg-white rounded-8  border border-[#E1E1E1]"
                  placeholder="$ 5"
                  min="1"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
              <td className="font-medium font-sans text-sm text-text_color1 ">
                Maximum Buy In
              </td>
              <td className="font-medium text-sm text-text_color1 ">
                <input
                  type="number"
                  name="maximumBuyin"
                  value={settings?.maximumBuyin}
                  className="p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]"
                  placeholder=""
                  min="1"
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr className="bg-sky border border-[#E1E1E1] flex justify-between w-full py-10 ps-[24px]">
              <td className="font-medium font-sans text-sm text-text_color1 ">
                Allow Unsold Teams
              </td>
              <td className="text-left w-[193px] me-[28px]">
                <input
                  className="auction_checkbox h-[16px] w-[16px] bg-white rounded-8"
                  style={{ opacity: "1", cursor: "pointer" }}
                  type="checkbox"
                  name=""
                  checked={settings?.allowUnslodTeams}
                  onChange={handleCheckboxChange}
                  readOnly
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {leagueBasicInfo?.creatorId === user?._id && (
        <div className="flex justify-center mt-[30px] ">
          <button
            className="bg-base rounded-8 py-[12px] px-14 text-white font-sans text-base font-semibold customButton"
            onClick={handleSave}
            disabled={loading || Object.keys(editingInfo).length === 0}
          >
            {loading ? (
              <div className="flex justify-center gap-3">
                {" "}
                <RotatingLines
                  visible={true}
                  height="20"
                  width="20"
                  strokeColor="#9aa8d1"
                  strokeWidth="5"
                  animationDuration="5"
                  ariaLabel="rotating-lines-loading"
                />
                Saveing...
              </div>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default AuctionSetting;
