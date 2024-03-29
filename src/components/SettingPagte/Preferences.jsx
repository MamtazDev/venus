import emailbanner from "../../assets/icons/changepass.png";
import twofactor from "../../assets/icons/twofactor.png";
import { useContext, useState } from "react";
import EmailSetting from "./EmailSetting";
import NotificationsSetting from "./NotificationsSetting";
import Swal from "sweetalert2";
import { changePassword } from "../../api/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
const Preferences = () => {
  const [step, setStep] = useState(0);

  const { setUser, setToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const form = e.target;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (!passwordRegex.test(password)) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      // });
      setErrorMessage(
        "Password must contain at least one uppercase, one lowercase, one special character, one digit and it should be at least 8 characters long.",
      );
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      // Swal.fire({
      //   icon: "error",
      //   title: "Oops...",
      //   text: "Password doesn't matched!",
      // });
      setErrorMessage("Password doesn't matched!");
      setIsLoading(false);
      return;
    }

    try {
      const res = await changePassword({ password });
      if (res?.data?.success) {
        setErrorMessage("");
        setUser(null);
        setToken(null);
        document.getElementById("change_pass").close();
        localStorage.removeItem("venusAuth");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
      if (error?.response?.data?.message) {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: `${error?.response?.data?.message}`,
        // });
        setErrorMessage(error?.response?.data?.message);
      } else {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: `${error?.message}`,
        // });
        setErrorMessage(error?.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {step === 0 && (
        <>
          <div className="p-30 bg-white max-w-[950px] w-full">
            <h3 className="text7">Account preferences</h3>
            <p
              className="text4 mb-[26px] mt-[5px]"
              style={{ color: "#9AA8D1" }}
            >
              Setting to help you keep your account secure
            </p>
            {/* <div className="flex  justify-between items-center">
              <div>
                <h4 className="text5">Email addresses</h4>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  Add or remove email addresses on your account
                </p>
              </div>
              <div>
                <h4 className="text5 text-right">
                  <button onClick={() => setStep(1)}>Change</button>
                </h4>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  1 email address
                </p>
              </div>
            </div> */}
            <div className="flex  justify-between items-center">
              <div>
                <h4 className="text5">Change password</h4>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  Choose a unique password to protect your account
                </p>
              </div>
              <div>
                <div className="text-right">
                  <button
                    className="text5 "
                    onClick={() =>
                      document.getElementById("change_pass").showModal()
                    }
                  >
                    Change{" "}
                  </button>
                </div>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  Last changed May 20, 2018
                </p>
              </div>
            </div>
            {/* <div className="flex  justify-between items-center">
              <div>
                <h4 className="text5">Two-step verification</h4>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  Activate this feature for enhanced account security
                </p>
              </div>
              <div>
                <button
                  className="text5 "
                  onClick={() =>
                    document.getElementById("two_factor").showModal()
                  }
                >
                  Change{" "}
                </button>
                <p
                  className="text4 mb-[26px] mt-[5px] text-right"
                  style={{ color: "#9AA8D1" }}
                >
                  Off
                </p>
              </div>
            </div> */}
            {/* <div className="flex  justify-between items-center">
              <div>
                <h4 className="text5">Notification Settings</h4>
                <p
                  className="text4 mb-[26px] mt-[5px]"
                  style={{ color: "#9AA8D1" }}
                >
                  Choose your notification settings
                </p>
              </div>
              <div>
                <h4 className="text5 text-right">
                  <button onClick={() => setStep(2)}>Change</button>
                </h4>
                <p
                  className="text4 mb-[26px] mt-[5px] text-right"
                  style={{ color: "#9AA8D1" }}
                >
                  Off
                </p>
              </div>
            </div> */}
          </div>
          {/* change pass modal */}
          <dialog id="change_pass" className="modal">
            <form
              onSubmit={handleSubmit}
              className="modal-box bg-white h-[393px] max-w-[756px] flex justify-center items-center rounded-3"
            >
              <div className="grid lg:grid-cols-2  grid-cols-1 items-center">
                <div className="mb-[10px]">
                  <img src={emailbanner} alt="" />
                </div>
                <div>
                  <h2 className="text-base  font-sans font-medium text-xl mb-[18px]">
                    Change your password
                  </h2>
                  <label
                    htmlFor=""
                    className="text-base text-[#222] font-normal font-sans"
                  >
                    Must be at least 8 charecters.
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Choose a password"
                    className="py-10 px-20 bg-[#F6F8FE]  rounded-8 border border-[#EEE] w-full mt-[10px]"
                  />
                  <input
                    type="password"
                    placeholder="Confirm  password"
                    name="confirmPassword"
                    className="py-10 px-20 bg-[#F6F8FE]  rounded-8 border border-[#EEE] w-full mt-[10px]"
                  />
                  <button
                    disabled={isLoading}
                    className="max-w-[599px] bg-base text-white rounded-3 text-sm font-semibold font-sans w-full py-10 mt-[20px]"
                  >
                    {isLoading ? "Loading..." : "Continue"}
                  </button>
                  {errorMessage && (
                    <p className="text-xs mt-3 text-[#F44336]">
                      {errorMessage}
                    </p>
                  )}
                </div>
              </div>
            </form>
            <label
              className="modal-backdrop"
              htmlFor="change_pass"
              onClick={() => document.getElementById("change_pass").close()}
            >
              Close
            </label>
          </dialog>
          {/* two factor authentication modal */}
          <dialog id="two_factor" className="modal">
            <div className="modal-box bg-white h-[438px] max-w-[756px] flex justify-center items-center rounded-3">
              <div className="grid lg:grid-cols-2  grid-cols-1 items-center">
                <div className="mb-[10px]">
                  <img src={twofactor} alt="" />
                </div>
                <div>
                  <h2 className="text-base  font-sans font-medium text-xl mb-[18px]">
                    Two-step verification
                  </h2>
                  <label
                    htmlFor=""
                    className="text-base text-[#605F5F] font-normal font-sans "
                  >
                    We sent a verification code to your mobile. Enter the code
                    from the mobile in the field below.
                  </label>
                  <p
                    className="mb-[30px] mt-[21px] text4"
                    style={{ color: "#000" }}
                  >
                    ******1234
                  </p>
                  <label
                    htmlFor=""
                    className="text-base font-medium font-sans text-[#263238]"
                  >
                    Type your 6 digits security code
                  </label>
                  <div className="flex gap-[7px] mt-[10px]">
                    {[1, 2, 3, 4, 5, 6].map((data, index) => (
                      <>
                        <input
                          key={index}
                          type="text"
                          className="ps-[8px] w-[45px] h-[46px] border border-[#E1E1E1] rounded-[4px]"
                        />
                      </>
                    ))}
                  </div>
                  <button className="max-w-[599px] bg-base text-white rounded-3 text-sm Ffont-semibold font-sans w-full py-10 mt-[16px] mb-[10px]">
                    Verify My Account
                  </button>
                  <small
                    className="text1 flex justify-end"
                    style={{ color: "#8D8D8D" }}
                  >
                    Didnt get the code?{" "}
                    <span
                      className="text3 underline"
                      style={{ color: "#000080" }}
                    >
                      Resend
                    </span>
                  </small>
                </div>
              </div>
            </div>
            <label
              className="modal-backdrop"
              htmlFor="two_factor"
              onClick={() => document.getElementById("two_factor").close()}
            >
              Close
            </label>
          </dialog>
        </>
      )}

      {step === 1 && <EmailSetting setStep={setStep} />}
      {step === 2 && <NotificationsSetting setStep={setStep} />}
    </>
  );
};

export default Preferences;
