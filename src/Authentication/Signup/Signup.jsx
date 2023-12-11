import { Link } from 'react-router-dom';
import loginImage from '../../assets/images/login.svg'
import './Signup.css'
const Signup = () => {
    return (
        <>
            <div className="grid gap-0 lg:grid-cols-2">
                <div>
                    <img className='hidden w-full h-screen lg:block object-cover' src={loginImage} alt="login image" />
                </div>
                <div>
                    <div className='flex justify-end p-30'>
                        <div className='flex items-center gap-30'>
                            <h4 className='text-lg text_dark_grey '>Already have any account?</h4>
                            <Link to="/login"><button className='text-white px-45 py-14 btn_blue_bg'>LogIn</button></Link>
                        </div>
                    </div>
                    <div className='login_wrapper'>
                        <div className="flex flex-col items-center justify-center ">
                            <h1 className='text-2xl font-semibold lg:text-5xl text-primary'>Lets Get Started!</h1>
                            <p className='text-base text222color'>Fill up all the required information</p>
                        </div>
                        <form className='login_form_wrapper'>
                            <div className='flex flex-col gap-5 '>
                                <div>
                                    <label className="">Full name</label>
                                    <input required type="text" placeholder="Enter your name" className="w-full input_field input " />
                                </div>
                                <div>
                                    <label className="">Email address</label>
                                    <input required type="email" placeholder="Enter your email address" className="w-full input_field input" />
                                </div>
                                <div className='grid gap-20 lg:grid-cols-2 w-full'>
                                    <label className=" form-control">
                                        <div className="label">
                                            <span className="label-text">Country</span>
                                        </div>
                                        <select className="w-full select border-none">
                                            <option selected>USA</option>
                                            <option selected>USA</option>
                                            <option selected>USA</option>
                                            <option selected>USA</option>
                                        </select>
                                    </label>
                                    <label className="w-full form-control">
                                        <div className="label">
                                            <span className="label-text">Gender</span>
                                        </div>
                                        <select className="select">
                                            <option selected>Male</option>
                                            <option selected>Female</option>
                                            <option selected>Other</option>
                                        </select>
                                    </label>
                                </div>

                                <div>
                                    <label className="">Password</label>
                                    <input type="password" placeholder="Enter your name" className="w-full input_field input input-bordered" required />
                                </div>
                                <div>
                                    <label className="">Confirm Password</label>
                                    <input type="password" placeholder="Enter your email address" className="w-full input_field input input-bordered" required />
                                </div>
                            </div>
                            <button type="submit" className='w-full mt-10 py-21 btn_blue_bg'>Register Now!</button>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Signup;