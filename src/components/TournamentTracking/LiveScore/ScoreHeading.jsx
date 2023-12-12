/* eslint-disable no-unused-vars */
import { useState } from 'react';
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
                                className={`${selectBtn === item.title
                                    ? "border-b-2 border-yellow text-yellow font-semibold "
                                    : "text-text_dark_grey "
                                    } text-base pb-[15px] pt-[24px]  flex gap-8 items-center`}
                                onClick={() => handleSelectBtn(item.title)}
                            >
                                <img src={item.img} alt="Table" />
                                <span>{item.title}</span>
                            </button>
                        ))}

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