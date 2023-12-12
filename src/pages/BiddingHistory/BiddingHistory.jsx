/* eslint-disable no-unused-vars */

const BiddingHistory = () => {
    return (
        <>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-white text3 text-sm font-semibold font-sans border-y border-border2 " >
                            <th className=" py-[17px] flex-grow-4 w-[60%]">Team</th>
                            <th className=" py-[17px]  text-left">Bid Amount</th>
                            <th className=" py-[17px]  text-left">Bid Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [1, 2, 3, 4, 5, 6,7,8,9,10].map((data) => (
                                <>
                                    <tr className="border-y border-border2 bg-white text3 items-center" style={{ color: "#222" }} >
                                        <td className="text-left flex gap-8 items-center">
                                            Alabama
                                        </td>
                                        <td className="text-left  py-[17px]">$0.00</td>
                                        <td className="text-left  py-[17px]">8 Dec at 02.00 PM GMT+6</td>
                                    </tr>
                                </>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </>
    );
};

export default BiddingHistory;