import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const AuctionGroups = () => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-white">
                        <tr className="border-0  ">
                            <th className="text3  py-16 ps-40 w-[40%]">Group Name  </th>
                            <th className="text3  py-16 text-left ">Teams</th>
                            <th className="text3  py-16 "></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-sky border border-[#F0F0F0]  ">
                            <td className="text3 ps-40">Auction Timer</td>

                            <td className="font-medium text-sm text-text_color1  text-left">
                                <p className="text3 inline-block border-b border-border3 pb-[6px]">Arizona Cardinals</p>

                                <p className="text3 pt-[6px]">Baltimore Ravens</p>
                            </td>
                            <td className="font-medium text-sm text-text_color1 text-end ">
                                <button className="px-14 py-12 w-[112px] bg-[#F00] rounded-8 font-sans font-semibold text-white " >Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-[30px] '>
                <button className='bg-base rounded-8 py-[12px] px-14 text-white font-sans text-base font-semibold'
                    onClick={() => document.getElementById('add_new_group').showModal()}>New Group</button>
            </div>

            {/* modal */}

            <dialog id="add_new_group" className="modal">
                <div className="modal-box bg-white h-[478px] rounded-3">
                    <h3 className="text-2xl font-sans text-text_dark_grey font-semibold text-center mb-[20px] pt-[26px] ">New Group</h3>
                    <hr className='border-t border-border_grey mx-[40px] mb-[50px]' />

                    <div className='px-[52px]'>
                        <div className=' mt-[20px]'>
                            <label className=" text-base font-medium text-[#00000] font-sans">Group Name</label>
                            <input type="text" placeholder="Group Name" className="bg-sky_bg2 w-full input_field input input-bordered mt-[10px] border border-[#EEE]" required />
                        </div>


                        <Select
                            // defaultValue={auctionData}
                            isMulti
                            name="colors"
                            options={options}
                            className="basic-multi-select mt-[20px] bg-[#F6F8FE]"
                            classNamePrefix="Select team"
                        />

                        <div className="modal-action flex-col">
                            <form method="">
                                <button className='bg-base py-10 w-full rounded-3 text-white'>Create new seed groups</button>
                            </form>
                        </div>


                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="add_new_group" onClick={() => document.getElementById('add_new_group').close()}>Close</label>
            </dialog>


        </>
    );
};

export default AuctionGroups;