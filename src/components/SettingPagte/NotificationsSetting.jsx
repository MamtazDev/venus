/* eslint-disable react/prop-types */
import setting from '../../assets/icons/setting1.png'

const NotificationsSetting = ({setStep}) => {
    return (
        <>
            <div className="max-w-[847px]">
                <h4 className="text5" style={{ fontSize: "20px" }}>Notification settings</h4>
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
            <div className="bg-[#FFF9EF] py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={setting} alt="" />
                    <div>
                        <h4 className="text5" style={{ fontWeight: "500" }}>Automatically text alignment</h4>
                        <p className='mt-[6px] text-base font-normal font-sans text-[#939393]'>This is unusual experondary feature</p>

                    </div>
                </div>
                <input type="checkbox" className="toggle [--tglbg:#e3e8ee] bg-base  border-blue-500" checked />
            </div>
            <h4 className="text5 mb-[13px] mt-[30px]">Secondary Options</h4>

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
            <div className="bg-[#FFF9EF] py-[17px] px-21 max-w-[599px] rounded-8 flex items-center justify-between mb-[16px]">
                <div className='flex gap-20 items-center'>
                    <img src={setting} alt="" />
                    <div>
                        <h4 className="text5" style={{ fontWeight: "500" }}>Automatically delete items</h4>
                        <p className='mt-[6px] text-base font-normal font-sans text-[#939393]'>Get rid of shot and keep working hard</p>

                    </div>
                </div>
                <input type="checkbox" className="toggle [--tglbg:#e3e8ee] bg-base  border-blue-500" />
            </div>
            <button onClick={()=>setStep(0)} className='max-w-[599px] bg-base text-white rounded-3 text-sm font-semibold font-sans w-full py-10 '>Save changes</button>

        </>
    );
};

export default NotificationsSetting;