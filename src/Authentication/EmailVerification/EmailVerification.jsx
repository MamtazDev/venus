import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login.svg";

const EmailVerification = () => {
    return (
        <>
            <div className="grid gap-0 lg:grid-cols-2">
                <div>
                    <img className='hidden w-full h-screen lg:block object-cover' src={loginImage} alt="login image" />
                </div>
                <div>
                    <div className='flex justify-end p-30'>
                        <div className='flex items-center gap-30'>
                            <h4 className='text-lg text_dark_grey '>Don’t have any account?</h4>
                            <Link to="/login"><button className='text-white px-45 py-14  bg-base rounded-[3px] text-lg font-semibold'>LogIn</button></Link>
                        </div>
                    </div>
                    <div className='login_wrapper login_padding' >
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className='text-2xl font-semibold lg:text-5xl text-primary'>Email Verification</h1>
                            <p className='text-base text222color'>Enter the OTP code that was sent your email</p>
                        </div>
                        <form action="" className='login_form_wrapper'>
                            <div className='flex flex-col gap-5 '>
                                <div>
                                    <label className="">OTP</label>
                                    <input required type="number" placeholder="Enter your OTP code" className="w-full input_field input input-bordered mt-[10px]" />
                                </div>
                            </div>
                            <button type="submit" className='w-full text-white mt-[61px]  py-21 bg-base rounded-[3px] text-lg font-semibold'>Verified</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmailVerification;
