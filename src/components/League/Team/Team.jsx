/* eslint-disable no-unused-vars */

import NoFoundData from '../../NoFoundData/NoFoundData';
import delet from '../../../assets/icons/delete.png';

const Team = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-white text3 text-sm font-semibold font-sans border-y border-border2 " >
                            <th className=" py-[17px] flex-grow-4 w-[30%] ps-[49px] ">Team</th>
                            <th className=" py-[17px]  text-left w-[30%]">Owner</th>
                            <th className=" py-[17px]  text-center">Current pay</th>
                            <th className=" py-[17px]  text-left"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data,index) => (
                                <>
                                    <tr key={index} className="border-y border-border2 bg-white text3 items-center" style={{ color: "#222" }} >
                                        <td className="text-left  gap-8 items-center  ps-[49px] ">
                                            Shamin
                                        </td>
                                        <td className="text-left  py-[17px]"></td>
                                        <td className="text-center  py-[17px]">$0.00</td>
                                        <td className="text-right pe-[34px]  py-[17px]">
                                            <button className="p-10 bg-base text-white rounded-3" onClick={() => document.getElementById('pay_team_modal').showModal()}>Pay Team</button>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }


                    </tbody>
                </table>
            </div>


            {/* modal */}
            <dialog id="pay_team_modal" className="modal">
                <div className="modal-box bg-white max-w-[100%] rounded-3">
                    <div className="modal-action mt-0 mb-[20px] flex-col justify-end text-right">
                        <form>
                            <button type="submit" className='w-[30px]'>x</button>
                        </form>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">Arizona Cardinals</h3>
                        <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">Total Payout: $0.00</h3>
                    </div>
                    <div>
                        <button className="py-10 px-23 bg-base text-white rounded-3 me-[10px]" onClick={() => document.getElementById('add_payout').showModal()}>Add Payout</button>
                        <button className="py-10 px-23 bg-base text-white rounded-3">Save</button>
                        <div className='mt-[30px]'>
                            <div className="grid lg:grid-cols-3 grid-cols-1 bg-dark_sky">
                                <div className='py-16 flex justify-center  ' >
                                    <p className='font-sm font-semibold text-white'>Paid By </p>
                                </div>
                                <div className='py-16 flex justify-center  ' >
                                    <p className='font-sm font-semibold text-white'>Amount </p>
                                </div>
                                <div className='py-16 flex justify-center  ' >
                                    <p className='font-sm font-semibold text-white'>Description </p>
                                </div>
                            </div>
                            <div className='bg-white py-[75px] border border-light_sky'>
                                <NoFoundData />
                            </div>
                        </div>

                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="pay_team_modal" onClick={() => document.getElementById('pay_team_modal').close()}>Close</label>

            </dialog>
            <dialog id="add_payout" className="modal">
                <div className="modal-box bg-white max-w-[100%] h-[100%] px-[50px] rounded-3">
                    <div className="modal-action mt-0 mb-[20px] flex-col justify-end text-right">
                        <form>
                            <button type="submit" className='w-[30px]'>x</button>
                        </form>
                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">Arizona Cardinals</h3>
                        <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] ">Total Payout: $10.00</h3>
                    </div>
                    <div>
                        <button className="py-10 px-23 bg-base text-white rounded-3 me-[10px]" onClick={() => document.getElementById('add_payout').showModal()}>Add Payout</button>
                        <button className="py-10 px-23 bg-base text-white rounded-3">Save</button>

                        <div className="overflow-x-auto">
                            <table className="table mt-[40px]  border-2 border-light_sky">
                                {/* head */}
                                <thead>
                                    <tr className="bg-sky text3 text-sm font-semibold font-sans border-y border-border2 " >
                                        <th className=" py-[17px] flex-grow-4 w-[30%]">Paid By</th>
                                        <th className=" py-[17px]  text-left w-[30%]">Amount</th>
                                        <th className=" py-[17px]  text-left w-[30%]">Description</th>
                                        <th className=" py-[17px]  text-right"></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [1].map((data) => (
                                            <>
                                                <tr className="border-y border-border2 bg-white text3 items-center" style={{ color: "#222" }} >
                                                    <td className="text-left flex gap-8 items-center">
                                                        John Smith
                                                    </td>
                                                    <td className="text-left  py-[17px]">
                                                        <div className='flex justify-center  '>
                                                            <div className='text-[12px] font-semibold text-white px-14 py-10 h-[36px] w-[36px] bg-dark_sky'>
                                                                $
                                                            </div>
                                                            <input placeholder='10.00' type="number" className='bg-[#F4F7FE] text-left w-full ps-[18px]' defaultValue="10.00" />
                                                        </div>
                                                    </td>
                                                    <td className="text-left  py-[17px]">
                                                        <input type="number" className='bg-light_sky  w-full h-[36px] ps-[22px]' defaultValue="0" />
                                                    </td>
                                                    <td className="text-right  py-[17px]">
                                                        <button className="p-10  text-white rounded-3">
                                                            <img src={delet} alt="" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="add_payout" onClick={() => document.getElementById('add_payout').close()}>Close</label>

            </dialog>

        </div>
    );
};

export default Team;