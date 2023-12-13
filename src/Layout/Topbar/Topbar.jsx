import notification from '../../assets/notification.png'
import profile from '../../assets/profile.png'
const Topbar = () => {
    return (
        <>
            <div className="flex gap-20 justify-end border-b border-[#C8CBD9]  pb-[24px] pe-30">
                <button><img src={notification} alt="notification" /></button>
                <div className='flex items-center gap-6' >
                    <img src={profile} alt="" />
                    <p>John Smith</p>
                </div>
                <button className='py-10 px-[23px] bg-base rounded-3 text-white '>Leave</button>
            </div>

        </>
    );
};

export default Topbar;