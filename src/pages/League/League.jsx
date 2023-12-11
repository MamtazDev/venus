import { useState } from "react";
import home from '../../assets/icons/home.svg'
import Home from "../../components/League/Home/Home";
import Auction from "../../components/League/Auction/Auction";
import Setting from "../../components/League/Setting/Setting";
import Team from "../../components/League/Team/Team";




const League = () => {
    const data = ["Home", "Auction", "Team", "Setting"];
    const [selectBtn, setSelectBtn] = useState("Home");

    const handleSelectBtn = (selectedData) => {
        setSelectBtn(selectedData);
    };
    return (
        <>
            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end ">
                        {data.map((item) => (
                            <button
                                key={item}
                                className={`${selectBtn === item
                                    ? "border-b-2 border-yellow text-yellow font-semibold "
                                    : "text-text_dark_grey "
                                    } text-base pb-[15px] pt-[24px]  flex gap-8 items-center`}
                                onClick={() => handleSelectBtn(item)}
                            >
                                <img src={home} alt="home" />
                                <span>{item}</span>
                            </button>
                        ))}

                    </div>
                </div>
            </div>

            {selectBtn === "Home" ? <Home /> :
                selectBtn === "Auction" ? <Auction /> :
                    selectBtn === "Team" ? <Team /> :
                        selectBtn === "Setting" ? <Setting /> :
                            null
            }

        </>
    );
};

export default League;