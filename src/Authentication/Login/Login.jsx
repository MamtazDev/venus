/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import "./Login.css";
import loginImage from "../../assets/images/login.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Progress from 'react-progressbar';

const Login = () => {

  // const [image, setImage] = useState()
  // const [progressBar, setProgressBar] = useState(0)
  // const [loading, setLoading] = useState(false)

  // const handleFile = (event) => {

  //   setLoading(true)

  //   const file = event.target.files[0]
  //   const formdata = new FormData();
  //   setImage(URL.createObjectURL(file))

  //   axios.post('url', formdata, {
  //     Headers: {
  //       'Content-Type': "multipart/form-data"
  //     },
  //     onUploadProgress: event => {
  //       console.log(event)
  //       setProgressBar(Math.round(100 * event.loaded) / event.total)
  //       setTimeout(() => {
  //         setLoading(false)
  //       }, 500)
  //     }
  //   }).then(res => {
  //     setImage(URL.createObjectURL(file))
  //     setLoading(false)
  //   })
  //     .catch(err => console.log(err))
  //   console.log(loading)
  // }
  return (
    <>
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="login_img">
          {/* <input type="file" onChange={handleFile} />
          <br />

          <div className="mt-10">
            {loading && <Progress completed={progressBar} />}
          </div>
          <img
            className=" w-full h-full "
            src={image}
            alt="login image"
          /> */}

          <img
            className="hidden h-screen lg:block object-cover"
            src={loginImage}
            alt="login image"
          />


        </div>
        <div>
          <div className="flex justify-end p-30">
            <div className="flex items-center gap-30">
              <h4 className="text-lg text_dark_grey ">
                Don’t have any account?
              </h4>
              <Link to="/signup">
                <button className="text-white px-[27px] py-14  bg-base rounded-[3px] text-lg font-semibold">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
          <div className="login_wrapper login_padding">
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl font-semibold lg:text-5xl text-primary">
                Welcome Back!
              </h1>
              <p className="text-base label_texts">Enjoy your journey</p>
            </div>

            <form action="" className="login_form_wrapper">
              <div className="flex flex-col gap-5 ">
                <div>
                  <label className="">Email address</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="mt-[10px] w-full input_field"
                  />
                </div>
                <div>
                  <label className="">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your name"
                    className="mt-[10px] w-full input_field"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-10 py-14 lg:py-21  lg:px-20 px-10 bg-base text-white text-[20px] font-bold rounded-[3px] "
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
