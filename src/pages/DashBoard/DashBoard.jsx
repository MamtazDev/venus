import { Link } from 'react-router-dom';
import NoFoundData from '../../components/NoFoundData/NoFoundData';
const DashBoard = () => {

    const data = []

    console.log('oka',data);

    return (
        <div>
            {/* header */}
            <div className="flex lg:flex-row flex-col  lg:justify-between justify-center  lg:gap-0 gap-20 items-center mb-[30px]">
                <div>
                    <p className="text-sm  font-normal text-text_dark_grey lg:text-left text-center">Welcome</p>
                    <h2 className="text-2xl text-text_dark_grey   font-semibold ">John Smith</h2>
                </div>
                <div className="flex gap-10 flex-wrap">
                    <button className=" lg:py-14 py-12  lg:px-20 px-10 bg-base text-white rounded-[3px] text-sm font-semibold"
                        onClick={() => document.getElementById('my_modal_1').showModal()}>Start a League</button>
                    <button
                        onClick={() => document.getElementById('my_modal_2').showModal()}
                        className="lg:py-14 py-12  lg:px-20 px-10 bg-base text-white rounded-[3px] text-sm font-semibold">Join a League</button>
                </div>
            </div>
            {/* active league */}
            <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white mb-[40px]">
                <h2 className="lg:text-[28px] text-[20px] font-bold mb-5 ">Active League</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-[#F4F7FE]">
                            <tr className="border-0">
                                <th className="text-sm font-medium text-text_color1 font-lato">League Name</th>
                                <th className="text-sm font-medium text-text_color1 font-lato">Buy In</th>
                                <th className="text-sm font-medium text-text_color1 font-lato">Current Payout</th>
                                <th className="text-sm font-medium text-text_color1 font-lato">Net Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200 border border-[#F0F0F0] ">
                                <th className="font-medium text-sm text-text_color1 font-lato">Cricket</th>
                                <td className="font-medium text-sm text-text_color1 font-lato">$10.00</td>
                                <td className="font-medium text-sm text-text_color1 font-lato">$0.00</td>
                                <td className="font-medium text-sm text-text_color1 font-lato"> -$10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white">
                <h2 className="lg:text-[28px] text-[20px] font-bold">Past League</h2>
                <p className="text-text_color2 text-sm font-medium mb-5">Active League</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className="bg-[#F4F7FE]">
                            <tr className="border-0">
                                <th className="text-sm font-medium text-text_color1 ">League Name</th>
                                <th className="text-sm font-medium text-text_color1 ">Buy In</th>
                                <th className="text-sm font-medium text-text_color1 ">Current Payout</th>
                                <th className="text-sm font-medium text-text_color1 ">Net Return</th>
                            </tr>
                        </thead>
                        {
                            data.length !== 0 &&
                            <tbody className="min-h-[186px] w-full">
                                <tr className="bg-base-200 border border-[#F0F0F0] ">
                                    <th className="font-medium text-sm text-text_color1 ">Cricket</th>
                                    <td className="font-medium text-sm text-text_color1 ">$10.00</td>
                                    <td className="font-medium text-sm text-text_color1 ">$0.00</td>
                                    <td className="font-medium text-sm text-text_color1 "> -$10.00</td>
                                </tr>
                            </tbody>
                        }
                    </table>

                    {data.length === 0 && <>
                        <NoFoundData />
                    </>}
                </div>

            </div>
            {/* start league modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white h-[630px] rounded-3">
                    <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">Start a league</h3>
                    <hr className='border-t border-border_grey mx-[40px] mb-[50px]' />

                    <div className='px-[76px]'>
                        <label className=" form-control">
                            <div className="label">
                                <span className="label-text text-base font-medium text-[#000] font-sans" style={{ color: "#000" }}>Event</span>
                            </div>
                            <select className="w-full select border-none bg-sky_bg2 border border-border2 opacity-[0.3] mt-[2px]">
                                <option selected>USA</option>
                                <option selected>USA</option>
                                <option selected>USA</option>
                                <option selected>USA</option>
                            </select>
                        </label>
                        <label className=" form-control mt-[20px]">
                            <div className="label">
                                <span className="label-text p-[2px] text-base font-medium text-[#000] font-sans" style={{ color: "#000" }}>Event Scope</span>
                            </div>
                            <select className="w-full select border-none bg-sky_bg2 border border-border2 opacity-[0.3] mt-[2px]">
                                <option selected>USA</option>
                                <option selected>USA</option>
                                <option selected>USA</option>
                                <option selected>USA</option>
                            </select>
                        </label>
                        <div className=' mt-[20px]'>
                            <label className=" text-base font-medium text-[#000] font-sans" style={{ color: "#000" }}>League Name</label>
                            <input type="text" placeholder="League Name" className="bg-sky_bg2 w-full input_field input input-bordered mt-[10px]  border  border-[#EEE]" required />
                        </div>

                        <div className="modal-action flex-col">
                            <form method="">
                                <button className='bg-base py-10 w-full rounded-3 mt-[30px] text-white font-semibold'>Submit</button>
                            </form>
                        </div>

                        <div className='text-center lg:py-14 py-10'>
                            <Link className='text-center font-normal text-base font-sans text-text_dark_grey'>Join a League</Link>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_1" onClick={() => document.getElementById('my_modal_1').close()}>Close</label>
            </dialog>


            {/* join league modal */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white h-[621px] rounded-3">
                    <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">Start a league</h3>
                    <hr className='border-t border-border_grey mx-[40px] mb-[50px]' />

                    <div className='px-[52px]'>
                        <div className=' mt-[20px]'>
                            <label className=" text-base font-medium text-[#00000] font-sans">Invite Code</label>
                            <input type="text" placeholder="Insert code" className="bg-sky_bg2 w-full input_field input input-bordered mt-[10px] border border-border2" required />
                        </div>

                        <div className="modal-action flex-col">
                            <form method="">
                                <button className='bg-base py-10 w-full rounded-3 text-white'>Submit</button>
                            </form>
                        </div>

                        <div className='text-center py-14'>
                            <Link className='text-center'>Join a League</Link>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_2" onClick={() => document.getElementById('my_modal_2').close()}>Close</label>
            </dialog>

        </div>
    );
};

export default DashBoard;