/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import "./Login.css";
import loginImage from "../../assets/images/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Progress from "react-progressbar";
import Swal from "sweetalert2";
import { login } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const data = {
      email,
      password,
    };

    try {
      const res = await login(data);
      if (res?.data?.success) {
        setUser(res?.data?.user);
        setToken(res?.data?.accessToken);
        const userInfo = {
          user: res?.data?.user,
          accessToken: res?.data?.accessToken,
        };
        localStorage.setItem("venusAuth", JSON.stringify(userInfo));
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error?.response?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.response?.data?.message}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error?.message}`,
        });
      }
    } finally {
      setLoading(false);
    }
  };

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

            <form onSubmit={handleSubmit} className="login_form_wrapper">
              <div className="flex flex-col gap-5 ">
                <div>
                  <label className="">Email address</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    className="mt-[10px] w-full input_field"
                    name="email"
                  />
                </div>
                <div>
                  <label className="">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your name"
                    className="mt-[10px] w-full input_field"
                    required
                    name="password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-10 py-14 lg:py-21  lg:px-20 px-10 bg-base text-white text-[20px] font-bold rounded-[3px] "
                disabled={loading}
              >
                {loading ? "Logging..." : "Log In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
