/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import ScoreTable from './ScoreTable';
import ScoreStats from './ScoreStats';
import ScoreTeam from './ScoreTeam';
import table from '../../../assets/icons/table.png'
import stats from '../../../assets/icons/stats.png'
import team from '../../../assets/icons/team.png'
const ScoreHeading = () => {
    const data = [
        {
            title: "Table",
            img: table
        },
        {
            title: "Stats",
            img: stats
        },
        {
            title: "Team",
            img: team
        },
    ];


    const [selectBtn, setSelectBtn] = useState("Table");

    return (
        <>

            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end overflow-x-auto">
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

            {selectBtn === "Table" ? <ScoreTable /> :
                selectBtn === "Stats" ? <ScoreStats /> :
                    selectBtn === "Team" ? <ScoreTeam /> :

                        null
            }

        </>
    );
};

export default ScoreHeading;




function ButtonComponent({ item, selectBtn, handleSelectBtn, setSelectBtn }) {



    console.log("handleSelectBtn selectBtn: ", selectBtn)
    console.log("handleSelectBtn item: ", item)



    return (
        <button
            className={`
                                ${selectBtn === item.title ? "order-b-2 border-yellow" : " text-text_dark_grey "}
                                    // ? "border-b-2 border-yellow text-yellow font-semibold "
                                    // : "text-text_dark_grey "
                                    // } text-base pb-[15px] pt-[24px]  flex gap-8 items-center`}

            onClick={() => handleSelectBtn(item?.title)}
        >
            <img src={item.img} alt="Table" />
            <span>Name: {item.title}</span>
        </button>
    )
}
