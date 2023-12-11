import './Login.css'
import loginImage from '../../assets/images/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="grid gap-0 lg:grid-cols-2">
                <div className='login_img'>
                    <img className='hidden h-screen lg:block object-cover' src={loginImage} alt="login image" />
                </div>
                <div>
                    <div className='flex justify-end p-30'>
                        <div className='flex items-center gap-30'>
                            <h4 className='text-lg text_dark_grey '>Don’t have any account?</h4>
                            <Link to="/signup"><button className='text-white px-45 py-14 btn_blue_bg'>Register Now</button></Link>
                        </div>
                    </div>
                    <div className='login_wrapper login_padding' >
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className='text-2xl font-semibold lg:text-5xl text-primary'>Welcome Back!</h1>
                            <p className='text-base text222color'>Enjoy your journey</p>
                        </div>

                        <form action="" className='login_form_wrapper'>
                            <div className='flex flex-col gap-5 '>
                                <div>
                                    <label className="">Email address</label>
                                    <input required type="email" placeholder="Enter your email address" className="w-full input_field input input-bordered" />
                                </div>
                                <div>
                                    <label className="">Password</label>
                                    <input type="password" placeholder="Enter your name" className="w-full input_field input input-bordered" required />
                                </div>

                            </div>
                            <button type="submit" className='w-full mt-10 py-21 btn_blue_bg'>Log In</button>
                        </form>

                    </div>

                </div>
            </div>



        </>
    );
};

export default Login;