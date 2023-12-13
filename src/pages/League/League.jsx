import { useState } from "react";
import home from '../../assets/icons/home.svg'
import auction from '../../assets/icons/auction.svg'
import team from '../../assets/icons/team.png'
import Home from "../../components/League/Home/Home";
import Auction from "../../components/League/Auction/Auction";
import Setting from "../../components/League/Setting/Setting";
import Team from "../../components/League/Team/Team";

const League = () => {
    // const data = ["Home", "Auction", "Team", "Setting"];
    const data = [
        {
            title: "Home",
            img: home
        },
        {
            title: "Auction",
            img: auction
        },
        {
            title: "Team",
            img: team
        },
        {
            title: "Setting",
            img: team
        },
    ];

    const [selectBtn, setSelectBtn] = useState("Home");

    const handleSelectBtn = (selectedData) => {
        setSelectBtn(selectedData);
    };
    return (
        <>
            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end overflow-x-auto ">
                        {/* {data.map((item) => (
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
                        ))} */}
                        {
                            data.map((data) => (
                                <>
                                    {selectBtn === `${data.title}` ? <div onClick={() => setSelectBtn("")} >

                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-semibold '> <img src={data.img} alt="" /> {data.title}</p>

                                    </div> : <div onClick={() => setSelectBtn(`${data.title}`)} >
                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center text-text_dark_grey '> <img src={data.img} alt="" /> {data.title}</p> </div>}
                                </>
                            ))
                        }
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