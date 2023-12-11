
const AuctionGroups = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-white">
                        <tr className="border-0  ">
                            <th className="text3  py-16 ps-40">Group Name  </th>
                            <th className="text3  py-16 text-center ">Teams</th>
                            <th className="text3  py-16 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-sky border border-[#F0F0F0]  ">
                            <td className="text3 ps-40">Auction Timer</td>
                            <td className="font-medium text-sm text-text_color1  text-center">
                                <p className="text3 inline-block border-b border-border3 pb-[6px]">Arizona Cardinals</p>

                                <p className="text3 pt-[6px]">Baltimore Ravens</p>
                            </td>
                            <td className="font-medium text-sm text-text_color1 text-end ">
                                <button className="px-14 py-12  bg-[#F00] rounded-8 font-sans font-semibold text-white " >Delete</button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-[30px] '>
                <button className='bg-base rounded-3 py-[12px] px-14 text-white font-sans text-base font-semibold '>Save Changes</button>

            </div>
        </>
    );
};

export default AuctionGroups;