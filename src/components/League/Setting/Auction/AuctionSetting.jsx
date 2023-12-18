
const AuctionSetting = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-white">
                        <tr className="border-0 flex justify-between w-full ">
                            <th className="text-sm font-medium text-text_color1 py-[16px] px-[40px]">Rule  </th>
                            <th className="text-sm font-medium text-text_color1 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full ps-[24px]">
                            <td className="font-medium font-sans text-sm text-text_color1 ">Auction Timer</td>
                            <td className="font-medium text-sm text-text_color1 ">
                                <input type="text" defaultValue="15 Seconds" className='p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]' placeholder='15 Seconds' />
                            </td>
                        </tr>
                        <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
                            <td className="font-medium font-sans text-sm text-text_color1 ">Minimum Bid</td>
                            <td className="font-medium text-sm text-text_color1 ">
                                <input type="number" defaultValue="$ 1" className='p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]' placeholder='$ 1' />
                            </td>
                        </tr>
                        <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
                            <td className="font-medium font-sans text-sm text-text_color1 ">Minimum Buy In</td>
                            <td className="font-medium text-sm text-text_color1 ">
                                <input type="number" defaultValue="$ 5" className='p-10 bg-white rounded-8  border border-[#E1E1E1]' placeholder='$ 5' />
                            </td>
                        </tr>
                        <tr className="bg-sky border border-[#E1E1E1] flex justify-between items-center w-full  ps-[24px]">
                            <td className="font-medium font-sans text-sm text-text_color1 ">Maximum Buy In</td>
                            <td className="font-medium text-sm text-text_color1 ">
                                <input type="number" defaultValue="$" className='p-10 bg-white rounded-8 opacity-100 border border-[#E1E1E1]' placeholder='' />
                            </td>
                        </tr>
                        <tr className="bg-sky border border-[#E1E1E1] flex justify-between w-full py-10 ps-[24px]">
                            <td className="font-medium font-sans text-sm text-text_color1 ">Allow Unsold Teams</td>
                            <td className="text-left w-[193px] me-[28px]">
                                <input className='auction_checkbox h-[16px] w-[16px] bg-white rounded-8' style={{ opacity: "1" }} type="checkbox" name="" id="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='flex justify-center mt-[30px] '>
                <button className='bg-base rounded-8 py-[12px] px-14 text-white font-sans text-base font-semibold '>Save Changes</button>
            </div>
            {/*  */}


        </>
    );
};

export default AuctionSetting;