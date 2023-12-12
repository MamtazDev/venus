import { Link } from "react-router-dom";

const Preferences = () => {
    return (
        <>
            <div className="p-30 bg-white max-w-[950px] w-full">
                <h3 className="text7">Account preferences</h3>
                <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Setting to help you keep your account secure</p>
                <div className="flex  justify-between items-center">
                    <div>
                        <h4 className="text5">Email addresses</h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Add or remove email addresses on your account</p>
                    </div>
                    <div>
                        <h4 className="text5 text-right"><Link to="/">Change</Link></h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>1 email address</p>

                    </div>
                </div>
                <div className="flex  justify-between items-center">
                    <div>
                        <h4 className="text5">Change password</h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Choose a unique password to protect your account</p>
                    </div>
                    <div>
                        <h4 className="text5 text-right"><Link to="/">Change</Link></h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Last changed May 20, 2018</p>
                    </div>
                </div>
                <div className="flex  justify-between items-center">
                    <div>
                        <h4 className="text5">Two-step verification</h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Activate this feature for enhanced account security</p>
                    </div>
                    <div>
                        <h4 className="text5 text-right"><Link to="/">Change</Link></h4>
                        <p className="text4 mb-[26px] mt-[5px] text-right" style={{ color: "#9AA8D1" }}>Off</p>

                    </div>
                </div>
                <div className="flex  justify-between items-center">
                    <div>
                        <h4 className="text5">Notification Settings</h4>
                        <p className="text4 mb-[26px] mt-[5px]" style={{ color: "#9AA8D1" }}>Choose your notification settings</p>
                    </div>
                    <div>
                        <h4 className="text5 text-right"><Link to="/">Change</Link></h4>
                        <p className="text4 mb-[26px] mt-[5px] text-right" style={{ color: "#9AA8D1" }}>Off</p>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Preferences;