


import { useState } from "react";
import General from "./General/General";
import Roaster from "./Roaster/Roaster";
import AuctionSetting from './Auction/AuctionSetting';
import AuctionGroups from "./AuctionGroups/AuctionGroups";
import PayoutRules from "./PayoutRules/PayoutRules";

const SettingHeader = () => {
    const data = ["General", "Roaster", "Auction", "Auction groups", "Payout Rules"];
    const [selectBtn, setSelectBtn] = useState("General");

    const handleSelectBtn = (selectedData) => {
        setSelectBtn(selectedData);
    };
    return (
        <>
            <div className="mb-[20px]">
                <div className="">
                    <div className="flex gap-[20px]  items-end overflow-x-auto ">
                        {data.map((item) => (
                            <button
                                key={item}
                                className={`${selectBtn === item
                                    ? "bg-base text-white border border-base   font-semibold py-[12px] px-31"
                                    : "text-text_dark_grey font-normal border border-[#E1E1E1]"
                                    } text-base py-[12px] px-31 rounded-8  `}
                                onClick={() => handleSelectBtn(item)}
                            >
                                <span>{item}</span>
                            </button>
                        ))}

                    </div>
                </div>
            </div>

            {selectBtn === "General" ? <General /> :
                selectBtn === "Roaster" ? <Roaster /> :
                    selectBtn === "Auction" ? <AuctionSetting /> :
                        selectBtn === "Auction groups" ? <AuctionGroups /> :
                            selectBtn === "Payout Rules" ? <PayoutRules /> :
                                null
            }

        </>
    );
};

export default SettingHeader;