/* eslint-disable no-unused-vars */

import NoFoundData from '../../NoFoundData/NoFoundData';
import { Link } from 'react-router-dom';
const Team = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-white text3 text-sm font-semibold font-sans border-y border-border2 " >
                            <th className=" py-[17px] flex-grow-4 w-[60%]">Team</th>
                            <th className=" py-[17px]  text-left">Owner</th>
                            <th className=" py-[17px]  text-left">Current pay</th>
                            <th className=" py-[17px]  text-left"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                                <>
                                    <tr className="border-y border-border2 bg-white text3 items-center" style={{ color: "#222" }} >
                                        <td className="text-left flex gap-8 items-center">
                                            Shamin
                                        </td>
                                        <td className="text-left  py-[17px]"></td>
                                        <td className="text-left  py-[17px]">$0.00</td>
                                        <td className="text-left  py-[17px]">
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
                <div className="modal-box bg-white max-w-[100%]">
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
                        <button className="py-10 px-23 bg-base text-white rounded-3 me-[10px]">Add Payout</button>
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
            </dialog>

        </div>
    );
};

export default Team;