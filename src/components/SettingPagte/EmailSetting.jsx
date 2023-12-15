/* eslint-disable react/prop-types */
import setting from '../../assets/icons/setting1.png'
import email from '../../assets/icons/email.png'
import add from '../../assets/icons/add.png'
import delet from '../../assets/icons/delete.png'
import emailbanner from '../../assets/icons/modalbg.png'

const EmailSetting = ({ setStep }) => {
    return (
        <>
            <div className="max-w-[847px]">
                <h4 className="text5" style={{ fontSize: "20px" }}>Email settings</h4>
                <p className="text4 mb-[25px] mt-[5px]" style={{ color: "#9AA8D1" }}>By default, designers will be notified by your companys preferred dark patterns. Employees can
                    also customize their notification preferences by logging into the dashboard</p>
            </div>
            <h4 className="text5 mb-[13px]">Primary Settings</h4>

            <div className="bg-white py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={setting} alt="" />
                    <div>
                        <h4 className="text5" style={{ fontWeight: "500" }}>Setting options disabled</h4>
                        <p className='mt-[6px] text-base font-normal font-sans text-[#939393] '>Describe here what it far</p>

                    </div>
                </div>
                <label className="switch">
                    <input type="checkbox"/>
                        <span className="slider round"></span>
                </label>
            </div>
            <h4 className="text5 mb-[13px] mt-[30px]">Add/Remove Email Addresses</h4>
            <div className="bg-white py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={email} alt="" />
                    <h4 className="text5" style={{ fontWeight: "500" }}>Add New Email</h4>
                </div>
                <button onClick={() => document.getElementById('add_email').showModal()}>
                    <img src={add} alt="" />
                </button>
            </div>

            <div className="bg-white py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={email} alt="" />
                    <h4 className="text5" style={{ fontWeight: "500" }} >Remove Email Address</h4>
                </div>
                <button onClick={() => document.getElementById('remove_email').showModal()}><img src={delet} alt="" /></button>
            </div>

            <div className="flex gap-20 max-w-[599px]">
                <button onClick={() => setStep(0)} className="py-10  bg-base text-white text2 rounded-3  w-full" style={{ color: "#fff" }}> Save changes</button>
                <button onClick={() => setStep(0)} className="rounded-3 bg-[#E9E9F7] py-10 font-medium w-full">Cancel</button>
            </div>

            {/* add email modal */}
            <dialog id="add_email" className="modal">
                <div className="modal-box bg-white h-[305px] max-w-[756px] flex justify-center items-center">
                    <div className="grid lg:grid-cols-2  grid-cols-1">
                        <div className='mb-[10px]'>
                            <img src={emailbanner} alt="" />
                        </div>
                        <div>
                            <h2 className='text-base  font-sans font-medium text-xl mb-[18px]'>Add Email Address</h2>
                            <label htmlFor="" className='text-base text-[#222] font-normal font-sans'>Enter your new email</label>
                            <input type="text" placeholder='razana....' className='py-10 px-20 bg-[#F6F8FE]  rounded-8 border border-[#EEE] w-full mt-[10px]' />
                            <button className='max-w-[599px] bg-base text-white rounded-3 text-sm font-semibold font-sans w-full py-10 mt-[20px]'>Add Email</button>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="add_email" onClick={() => document.getElementById('add_email').close()}>Close</label>
            </dialog>
            {/*remove_email */}
            <dialog id="remove_email" className="modal">
                <div className="modal-box bg-white h-[305px] max-w-[756px] flex justify-center items-center">
                    <div className="grid lg:grid-cols-2  grid-cols-1">
                        <div className='mb-[10px]'>
                            <img src={emailbanner} alt="" />
                        </div>
                        <div>
                            <h2 className='text-base  font-sans font-medium text-xl mb-[18px]'>Remove Email Address</h2>
                            <label htmlFor="" className='text-base text-[#222] font-normal font-sans'>Remove your email address</label>
                            <input type="text" placeholder='razana....' className='py-10 px-20 bg-[#F6F8FE]  rounded-8 border border-[#EEE] w-full mt-[10px]' />
                            <button className='max-w-[599px] bg-[#D90606] text-white rounded-3 text-sm font-semibold font-sans w-full py-10 mt-[20px]'>Delete Email</button>
                        </div>
                    </div>
                </div>
                <label className="modal-backdrop" htmlFor="remove_email" onClick={() => document.getElementById('remove_email').close()}>Close</label>
            </dialog>
        </>
    );
};

export default EmailSetting;