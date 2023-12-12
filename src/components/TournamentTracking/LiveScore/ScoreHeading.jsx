/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ScoreTable from './ScoreTable';
import ScoreStats from './ScoreStats';
import ScoreTeam from './ScoreTeam';
import table from '../../../assets/icons/table.png'
import stats from '../../../assets/icons/stats.png'
import team from '../../../assets/icons/team.png'
const ScoreHeading = () => {
    const data = ["Table", "Stats", "Team"];
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
                                className={`${selectBtn === item
                                    ? "border-b-2 border-yellow text-yellow font-semibold "
                                    : "text-text_dark_grey "
                                    } text-base pb-[15px] pt-[24px]  flex gap-8 items-center`}
                                onClick={() => handleSelectBtn(item)}
                            >
                                <img src={table} alt="Table" />
                                <span>{item}</span>
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