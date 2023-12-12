/* eslint-disable no-unused-vars */
import profile from '../../../assets/icons/profile1.png'
const ScoreStats = () => {
    return (
        <>
            <h3 style={{ fontSize: "24px" }} className='text6 mb-[20px]' >Top Performance</h3>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
                <div className="p-20 bg-white rounded-3">
                    <p className="border-b border-light_sky text6 pb-20 ">Top Run Scorers</p>
                    {[1, 2, 3].map((data) => (
                        <>
                            <div className='flex items-center gap-10 border-b border-light_sky '>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='py-[12px] '>
                                    <small className='text1'>Gerhard Erasmus</small>
                                    <p className='text5 mt-[4px]'>183.3</p>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Innings: 35 </span>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Average: 36.8</span>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
                <div className="p-20 bg-white rounded-3">
                    <p className="border-b border-light_sky text6 pb-20 ">Top Wicket Taker</p>
                    {[1, 2, 3].map((data) => (
                        <>
                            <div className='flex items-center gap-10 border-b border-light_sky '>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='py-[12px] '>
                                    <small className='text1'>Gerhard Erasmus</small>
                                    <p className='text5 mt-[4px]'>183.3</p>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Innings: 35 </span>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Average: 36.8</span>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-[20px]">
                <div className="p-20 bg-white rounded-3">
                    <p className="border-b border-light_sky text6 pb-20 ">Best Batting Strike Rates</p>
                    {[1, 2, 3].map((data) => (
                        <>
                            <div className='flex items-center gap-10 border-b border-light_sky '>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='py-[12px] '>
                                    <small className='text1'>Gerhard Erasmus</small>
                                    <p className='text5 mt-[4px]'>183.3</p>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Innings: 35 </span>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Average: 36.8</span>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>
                <div className="p-20 bg-white rounded-3">
                    <p className="border-b border-light_sky text6 pb-20 ">Best Bowling Economy</p>
                    {[1, 2, 3].map((data) => (
                        <>
                            <div className='flex items-center gap-10 border-b border-light_sky '>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <div className='py-[12px] '>
                                    <small className='text1'>Gerhard Erasmus</small>
                                    <p className='text5 mt-[4px]'>183.3</p>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Innings: 35 </span>
                                    <span className='text-[12px] font-normal  font-sans text-[#A8A8A8] mt-[2px]'>Average: 36.8</span>
                                </div>
                            </div>
                        </>
                    ))
                    }
                </div>

            </div>


        </>
    );
};

export default ScoreStats;