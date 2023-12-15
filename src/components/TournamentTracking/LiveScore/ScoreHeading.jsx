/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ScoreTable from './ScoreTable';
import ScoreStats from './ScoreStats';
import ScoreTeam from './ScoreTeam';
import table from '../../../assets/icons/table.png'
import tableblack from '../../../assets/icons/tableblack.png'
import stats from '../../../assets/icons/stats.png'
import statsActive from '../../../assets/icons/statsactive.png'
import team from '../../../assets/icons/team.png'
import teamActive from '../../../assets/icons/yellowteam.png'
const ScoreHeading = () => {
    const data = [
        {
            title: "Table",
            img: tableblack,
            activeIcon: table
        },
        {
            title: "Stats",
            img: stats,
            activeIcon: statsActive
        },
        {
            title: "Team",
            img: team,
            activeIcon: teamActive
        },
    ];


    const [selectBtn, setSelectBtn] = useState("General");

    const tabChangerHandler = (tab) => {
        setSelectBtn(tab)
        localStorage.setItem("activeTabsScore", tab)
    }
    useEffect(() => {
        setSelectBtn(localStorage.getItem("activeTabsScore") ? localStorage.getItem("activeTabsScore") : localStorage.setItem("activeTabsScore", "Table"))

    }, [])
    return (
        <>
            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end overflow-x-auto">
                        {
                            data.map((data, index) => (
                                <>
                                    {selectBtn === `${data.title}` ? <div key={index} onClick={() => tabChangerHandler(data.title)} >

                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-semibold '>

                                            <img
                                                src={selectBtn === data.title ? data.activeIcon : data.img}
                                                alt=""
                                            />

                                            {data.title}</p>

                                    </div> : <div onClick={() => tabChangerHandler(data.title)} >
                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center text-text_dark_grey '> <img src={data.img} alt="" /> {data.title}</p> </div>}
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>

            {selectBtn === "Table" ? <ScoreTable /> :
                selectBtn === "Stats" ? <ScoreStats /> :
                    selectBtn === "Team" ? <ScoreTeam /> :

                        null
            }

        </>
    );
};

export default ScoreHeading;


