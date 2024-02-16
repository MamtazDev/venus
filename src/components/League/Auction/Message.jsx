import { useEffect, useRef, useState } from "react";
import send from "../../../assets/icons/wpf_sent.png";
import { addMessage } from "../../../api/auction";

const Message = ({
  leagueBasicInfo,
  auctionMessages,
  fetchLeagueMessages,
  setAuctionMessages,
  socket,
}) => {
  const [message, setMessage] = useState("");

  const messagesEndRef = useRef(null);

  // const socket = io(`${import.meta.env.VITE_BASE_URL}`);

  // useEffect(() => {
  //   socket.on("message", (msg) => {
  //     console.log("message", msg);
  //     setAuctionMessages((current) => [...current, msg]);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

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
          socket.emit("message", response?.data?.data, leagueBasicInfo?._id);
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [auctionMessages]);
  return (
    <>
      <div className="mt-[10px] mb-[49px] bg-white rounded-3 p-[15px] flex flex-col justify-end   h-[270px]">
        <div className="overflow-y-scroll">
          {auctionMessages &&
            auctionMessages?.length > 0 &&
            auctionMessages?.map((item, idx) => (
              <div className="my-3 px-10" key={idx}>
                <div className="flex justify-between gap-4">
                  <p className="flex gap-2">
                    <span className="font-bold">{item?.user?.name}</span>
                    {item?.message}
                  </p>
                  {/* <p>{formateToClockTime(item?.createdAt)}</p> */}
                </div>
              </div>
            ))}
          <div ref={messagesEndRef} />
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
