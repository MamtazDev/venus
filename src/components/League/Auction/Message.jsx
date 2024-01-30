import { useState } from "react";
import send from "../../../assets/icons/wpf_sent.png";
import { addMessage } from "../../../api/auction";
import { useContext } from "react";
import { LeagueContext } from "../../../contexts/LeagueInfoProvider";
import { formateToClockTime } from "../../../utils/formatTime";
const Message = ({ leagueBasicInfo }) => {
  const [message, setMessage] = useState("");
  const { auctionMessages, fetchLeagueMessages } = useContext(LeagueContext);

  console.log(auctionMessages, "auctionMessages");

  const handleMessageSend = async () => {
    const data = {
      leagueId: leagueBasicInfo?._id,
      message: message,
    };
    if (!message) {
      return;
    } else {
      try {
        const response = await addMessage(data);

        if (response?.data?.success) {
          setMessage("");
          fetchLeagueMessages();
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleMessageSend();
    }
  };
  return (
    <>
      <div className="mt-[10px] mb-[49px] bg-white rounded-3 p-[15px] flex flex-col justify-end   h-[270px]">
        <div className="overflow-y-scroll">
          {auctionMessages &&
            auctionMessages?.map((item, idx) => (
              <div className="my-3 px-10">
                <div className="flex justify-between gap-4">
                  <p className="flex gap-2">
                    <span className="font-bold">{item?.user?.name}</span>
                    {item?.message}
                  </p>
                  <p>{formateToClockTime(item?.createdAt)}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex w-full ">
          <input
            type="text"
            className="w-full px-20 py-10 bg-light_sky input_placeholder"
            placeholder="Type here..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyPress={handleKeyPress}
          />
          <button
            disabled={!message}
            className="bg-base px-20 py-10 customButton cursor-pointer"
            onClick={handleMessageSend}
          >
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
