
const PayoutRules = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-20">
                <div className="p-32 bg-white rounded-8">
                    <p className="text3">Calculation Mode</p>
                    <hr className="my-[31px] border-[#F2F0F0]" />
                    <select className="select select-bordered w-full opacity-[0.3]">
                        <option disabled selected>manual</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                </div>
                <div className="p-32 bg-white rounded-8">
                    <p className="text3">Commissioners Fee</p>

                    <div className="flex gap-[44px] mt-[28px] mb-[16px] ">
                        <div className="flex gap-[5px]">
                            <input type="radio" name="" className="" checked />
                            <label htmlFor="" className="text3">Percentage</label>
                        </div>
                        <div className="flex gap-[5px]">
                            <input type="radio" name="" className="" />
                            <label htmlFor="" className="text3">Absolute</label>
                        </div>
                    </div>

                    <select className="select select-bordered w-full opacity-[0.3]">
                        <option disabled selected>manual</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>

                </div>
            </div>
            <div className='flex justify-center mt-[30px] '>
                <button className='bg-base rounded-3 py-[12px] px-14 text-white font-sans text-base font-semibold '>Save Changes</button>
            </div>
            <div className="overflow-x-auto mt-[60px]">
                <table className="table">
                    <thead className="bg-white">
                        <tr className="border-0  ">
                            <th className="text3  py-16 ps-40">Group Name  </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-sky border border-[#F0F0F0]  ">

                            <td>
                                <textarea className="textarea w-full p-0 h-[135px]" placeholder="Write your Payout Rules"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-[30px] '>
                <button className='bg-base rounded-3 py-[12px] px-14 text-white font-sans text-base font-semibold '>Save Payout Info</button>
            </div>

        </>
    );
};

export default PayoutRules;