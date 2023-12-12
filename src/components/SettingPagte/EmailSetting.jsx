import setting from '../../assets/icons/setting1.png'
import email from '../../assets/icons/email.png'
import add from '../../assets/icons/add.png'
import delet from '../../assets/icons/delete.png'

const EmailSetting = () => {
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
                <input type="checkbox" className="toggle [--tglbg:#e3e8ee] bg-base  border-blue-500" />
            </div>
            {/* Add/Remove Email Addresses */}
            <h4 className="text5 mb-[13px] mt-[30px]">Add/Remove Email Addresses</h4>

            <div className="bg-white py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={email} alt="" />
                    <h4 className="text5" style={{ fontWeight: "500" }}>Add New Email</h4>
                </div>
                <img src={add} alt="" />
            </div>

            <div className="bg-white py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={email} alt="" />
                    <h4 className="text5" style={{ fontWeight: "500" }}>Remove Email Address</h4>
                </div>
                <img src={delet} alt="" />
            </div>

            {/* <button className='max-w-[599px] bg-base text-white rounded-3 text-sm font-semibold font-sans w-full py-10 '>Save changes</button> */}

            <div className="flex gap-20 max-w-[599px]">
                <button className="py-10  bg-base text-white text2 rounded-3  w-full" style={{ color: "#fff" }}> Save changes</button>
                <button className="rounded-3 bg-[#E9E9F7] py-10 font-medium w-full">Cancel</button>
            </div>

        </>
    );
};

export default EmailSetting;