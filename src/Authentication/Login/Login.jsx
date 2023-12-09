import loginImage from '../../assets/login.png'
import './Login.css'
const Login = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-0">
                <div>
                    <img className='w-full h-screen' src={loginImage} alt="login image" />
                </div>
                <div>
                    <div className='flex justify-end p-30'>
                        <div className='flex items-center gap-30'>
                            <h4 className='text-lg text_dark_grey '>Already have any account?</h4>
                            <button className='text-white px-45 py-14 btn_blue_bg '>LogIn</button>
                        </div>
                    </div>
                    <div className=''>
                        <h1 className='text-5xl font-semibold text-primary'>Email Verification</h1>
                        <p className='text-base text222color'>Enter the OTP code that was sent your email</p>
                        <div>
                            <input type="text" className='input_field' placeholder='dfkjsd' />


                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Login;