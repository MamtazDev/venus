import { useState } from "react";
import Acount from "./Acount";
import Preferences from "./Preferences";
import account from '../../assets/icons/account.png'
// import NotificationsSetting from "./NotificationsSetting";
// import EmailSetting from "./EmailSetting";
const SettinHeader = () => {
    
    const data = ["Account", "Preferences"];
    const [selectBtn, setSelectBtn] = useState("Account");

    const handleSelectBtn = (selectedData) => {
        setSelectBtn(selectedData);
    };
    return (
        <>
            <div className="pt-20  ps-2">
                <div className="bg-white ps-25 mb-[20px]">
                    <div className="flex gap-[75px]  items-end ">
                        {data.map((item) => (
                            <button
                                key={item}
                                className={`${selectBtn === item
                                    ? "border-b-2 border-yellow text-yellow font-semibold "
                                    : "text-text_dark_grey "
                                    } text-base pb-[15px] pt-[24px]  flex gap-8 items-center`}
                                onClick={() => handleSelectBtn(item)}
                            >
                                <img src={account} alt="home" />
                                <span>{item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {selectBtn === "Account" ? <Acount /> :
                selectBtn === "Preferences" ? <Preferences /> :
                // selectBtn === "Preferences" ? <NotificationsSetting /> :
                // selectBtn === "Preferences" ? <EmailSetting /> :/
                // location.pathname === "/preference/notification" ? <NotificationsSetting /> :
                    null
            }
        </>
    );
};

export default SettinHeader;