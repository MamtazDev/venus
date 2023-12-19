import nodatafound from "../../assets/icons/noDatafound.svg";

const NoFoundData = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full py-[60px]">
        <img src={nodatafound} alt="nodatafound" className="mb-[11px]" />
        <p className="text-text_color3  text-sm font-lato ">No Data found</p>
      </div>
    </div>
  );
};

export default NoFoundData;
