import NoFoundData from '../../components/NoFoundData/NoFoundData';

const DashBoard = () => {

    const data = []

    return (
        <div>
            {/* header */}
            <div className="flex justify-between items-center mb-[30px]">
                <div>
                    <p className="text-sm text_dark_grey">Welcome</p>
                    <h2 className="text-2xl text_dark_grey  font-semibold ">John Smith</h2>
                </div>
                <div className="flex gap-10">
                    <button className="py-14 px-20 bg-base text-white rounded-[3px]">Start a League</button>
                    <button className="py-14 px-20 bg-base text-white rounded-[3px]">Join a League</button>
                </div>
            </div>
            {/* active league */}
            <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white mb-[40px]">
                <h2 className="text-[28px] font-bold mb-5 ">Active League</h2>
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
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200 border border-[#F0F0F0] ">
                                <th className="font-medium text-sm text-text_color1 ">Cricket</th>
                                <td className="font-medium text-sm text-text_color1 ">$10.00</td>
                                <td className="font-medium text-sm text-text_color1 ">$0.00</td>
                                <td className="font-medium text-sm text-text_color1 "> -$10.00</td>
                            </tr>


                        </tbody>
                    </table>
                </div>

            </div>

            <div className="pt-[26px] px-31 pb-49  rounded-3 bg-white">
                <h2 className="text-[28px] font-bold">Past League</h2>
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
                        <tbody className="min-h-[186px] w-full">

                            {
                                data.length === 0 ? <>

                                    <NoFoundData />
                                </> :
                                    <tr className="bg-base-200 border border-[#F0F0F0] ">
                                        {/* <th className="font-medium text-sm text-text_color1 ">Cricket</th>
                                <td className="font-medium text-sm text-text_color1 ">$10.00</td>
                                <td className="font-medium text-sm text-text_color1 ">$0.00</td>
                                <td className="font-medium text-sm text-text_color1 "> -$10.00</td> */}
                                    </tr>
                            }

                        </tbody>

                    </table>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;