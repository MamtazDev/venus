import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login.svg";
import "./Signup.css";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { register } from "../../api/auth";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
const Signup = () => {
  const { setUser, setToken } = useContext(AuthContext);

  const [countryNames, setCountryNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const country = form.country.value;
    const gender = form.gender.value;
    const confirmPassword = form.confirmPassword.value;

    const data = {
      name,
      email,
      password,
      country,
      gender,
    };

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      });
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password doesn't matched!",
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await register(data);
      if (res?.data?.success) {
        setUser(res?.data?.user);
        setToken(res?.data?.accessToken);
        const userInfo = {
          user: res?.data?.user,
          accessToken: res?.data?.accessToken,
        };
        localStorage.setItem("venusAuth", JSON.stringify(userInfo));
        navigate(from, { replace: true });
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json",
      )
      .then(function (response) {
        setCountryNames(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="grid gap-0 lg:grid-cols-2">
        <div>
          <img
            className="hidden w-full h-screen lg:block object-cover"
            src={loginImage}
            alt="login image"
          />
        </div>
        <div>
          <div className="flex justify-end p-30">
            <div className="flex items-center gap-30">
              <h4 className="text-lg text_dark_grey ">
                Already have any account?
              </h4>
              <Link to="/login">
                <button className="text-white px-45 py-14  bg-base rounded-[3px] text-lg font-semibold">
                  LogIn
                </button>
              </Link>
            </div>
          </div>
          <div className="login_wrapper">
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-2xl font-semibold lg:text-5xl text-primary">
                Lets Get Started!
              </h1>
              <p className="text-base label_texts">
                Fill up all the required information
              </p>
            </div>
            <form className="login_form_wrapper" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 ">
                <div>
                  <label className="">Full name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full input_field mt-[10px] "
                  />
                </div>
                <div>
                  <label className="">Email address</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full input_field mt-[10px]"
                  />
                </div>
                <div className="grid gap-20 lg:grid-cols-2 w-full">
                  <label className=" form-control">
                    <div className="label">
                      <span className="label-text label_texts">Country</span>
                    </div>
                    <select
                      className="w-full select border-none"
                      name="country"
                    >
                      {countryNames &&
                        countryNames?.length > 0 &&
                        countryNames.map((item, idx) => (
                          <option
                            selected={item?.name === "India"}
                            value={item?.name}
                            key={idx}
                          >
                            {item?.name}
                          </option>
                        ))}
                    </select>
                  </label>
                  <label className="w-full form-control">
                    <div className="label">
                      <span className="label-text">Gender</span>
                    </div>
                    <select className="select" name="gender">
                      <option selected>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>

                <div>
                  <label className="">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your name"
                    className="w-full input_field mt-[10px] "
                    required
                  />
                </div>
                <div>
                  <label className="">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter your email address"
                    className="w-full input_field mt-[10px] "
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-10 py-21  bg-base text-white rounded-[3px] text-[20px] font-bold"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex justify-center gap-3">
                    {" "}
                    <RotatingLines
                      visible={true}
                      height="20"
                      width="20"
                      strokeColor="#9aa8d1"
                      strokeWidth="5"
                      animationDuration="5"
                      ariaLabel="rotating-lines-loading"
                    />
                    Registering...
                  </div>
                ) : (
                  "Register Now!"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
