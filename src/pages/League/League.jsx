import { useState } from "react";
import Home from "../../components/League/Home/Home";
import Auction from "../../components/League/Auction/Auction";
import Setting from "../../components/League/Setting/Setting";
import Team from "../../components/League/Team/Team";


import homeActive from '../../assets/icons/home.svg'
import home from '../../assets/icons/homeblack.png'

import auction from '../../assets/icons/auction.svg'
import auctionActive from '../../assets/icons/yellowauction.png'

import setting from '../../assets/icons/setting.png'
import settingActive from '../../assets/icons/yellowsetting.png'


import team from '../../assets/icons/team.png'
import teamActive from '../../assets/icons/yellowteam.png'

const League = () => {
    // const data = ["Home", "Auction", "Team", "Setting"];
    const data = [
        {
            title: "Home",
            img: home,
            activeIcon: homeActive
        },
        {
            title: "Auction",
            img: auction,
            activeIcon: auctionActive
        },
        {
            title: "Team",
            img: team,
            activeIcon: teamActive
        },
        {
            title: "Setting",
            img: setting,
            activeIcon: settingActive
        },

    ];

    const [selectBtn, setSelectBtn] = useState("Home");

    return (
        <>
            <div className=" ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end overflow-x-auto ">
                        {
                            data.map((data) => (
                                <>
                                    {selectBtn === `${data.title}` ? <div onClick={() => setSelectBtn("")} >

                                        <p className='cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-semibold'>
                                            <img
                                                src={selectBtn === data.title ? data.activeIcon : data.img}
                                                alt=""
                                            />

                                            {data.title}</p>

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