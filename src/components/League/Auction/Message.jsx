import send from "../../../assets/icons/wpf_sent.png";
const Message = () => {
  return (
    <>
      <div className="mt-[10px] mb-[49px] bg-white rounded-3 p-[15px] flex items-end h-[270px]">
        <div className="flex w-full ">
          <input
            type="text"
            className="w-full px-20 py-10 bg-light_sky input_placeholder"
            placeholder="Type here..."
          />
          <button className="bg-base px-20 py-10">
            <img src={send} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Message;
