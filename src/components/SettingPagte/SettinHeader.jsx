import { useState } from "react";
import Acount from "./Acount";
import Preferences from "./Preferences";
import account from '../../assets/icons/account.png'
import preference from '../../assets/icons/preference.png'
// import NotificationsSetting from "./NotificationsSetting";
// import EmailSetting from "./EmailSetting";
const SettinHeader = () => {
    const data = [
        {
            title: "Account",
            img: account
        },
        {
            title: "Preferences",
            img: preference
        },
    ];

    const [selectBtn, setSelectBtn] = useState("Account");

    return (
        <>
            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end ">
                        {
                            data.map((data) => (
                                <>
                                    {selectBtn === `${data.title}` ? <div onClick={() => setSelectBtn("")} >

                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center border-b-2 border-yellow text-yellow font-semibold '> <img src={data.img} alt="" /> {data.title}</p>

                                    </div> : <div onClick={() => setSelectBtn(`${data.title}`)} >
                                        <p className=' cursor-pointer  text-base pb-[15px] pt-[24px]  flex gap-8 items-center text-text_dark_grey border-transparent'> <img src={data.img} alt="" /> {data.title}</p> </div>}
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* {selectBtn === "Account" ? <Acount /> :
                selectBtn === "Preferences" ? <Preferences /> :
                    // selectBtn === "Preferences" ? <NotificationsSetting /> :
                    // selectBtn === "Preferences" ? <EmailSetting /> :/
                    // location.pathname === "/preference/notification" ? <NotificationsSetting /> :
                    null
            } */}

            {selectBtn === "Account" && <Acount />}
            {selectBtn === "Preferences" && <Preferences />}
        </>
    );
};

export default SettinHeader;