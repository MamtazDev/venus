import { useContext, useEffect, useRef, useState } from "react";
import delet from "../../assets/icons/delete1.png";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider";
import { updateUserInfo } from "../../api/auth";
import Swal from "sweetalert2";
const Acount = () => {
  const fileInputRef = useRef(null);

  const { user, setUser } = useContext(AuthContext);

  const [selectedFile, setSelectedFile] = useState(null);
  const [countryNames, setCountryNames] = useState([]);

  const [userInfo, setUserInfo] = useState({});
  const [editedInfo, setEditedInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChooseButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedInfo({ ...editedInfo, image: file });
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveButtonClick = () => {
    setSelectedFile(null);
    fileInputRef.current.value = ""; // Clear the file input
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setEditedInfo({ ...editedInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editedInfo?.image && editedInfo?.image?.size / (1024 * 1024) > 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Image size should be less than 3MB.`,
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();

    Object.entries(editedInfo).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const res = await updateUserInfo(formData);
      if (res?.data?.success) {
        const userInfo = {
          ...res?.data?.data,
        };
        const userOldInfo = JSON.parse(localStorage.getItem("venusAuth"));
        setUser(userInfo);
        localStorage.setItem(
          "venusAuth",
          JSON.stringify({ ...userOldInfo, user: userInfo }),
        );
        setEditedInfo({});
        setSelectedFile(null);
        Swal.fire({
          icon: "Success",
          title: "Successfull!",
          text: "User Info Updated successfully!",
        });
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

  console.log(editedInfo, "details");

  useEffect(() => {
    const userData = {
      name: user?.name,
      email: user?.email,
      country: user?.country,
      gender: user?.gender,
      image: user?.image,
      details: user?.details,
      phoneNumber: user?.phoneNumber,
    };

    setUserInfo(userData);
  }, [user]);

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
      <div className="bg-white p-30 max-w-[800px] w-[100%]">
        <h4 className="text6">Account Setting</h4>
        <p className="text4 mb-[30px] mt-[5px]" style={{ color: "#9AA8D1" }}>
          View and update your account details
        </p>
        <form className="flex flex-col gap-[24px]" onSubmit={handleSubmit}>
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <div>
              <label className="">First name</label>
              <input
                required
                type="text"
                placeholder="Enter your first name"
                className=" opacity-100 border border-[#E1E1E1] w-full input_field input mt-[12px]"
              />
            </div>
            <div>
              <label className="">Last name</label>
              <input
                required
                type="text"
                placeholder="Enter your last name"
                className=" opacity-100 border border-[#E1E1E1] w-full input_field input mt-[12px]"
              />
            </div>
          </div> */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <div>
              <label className="">Username</label>
              <input
                required
                type="text"
                placeholder="Enter your username"
                className="border border-[#E1E1E1] w-full input_field input mt-[12px] opacity-100"
                name="name"
                value={userInfo?.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="">Email</label>
              <input
                required
                value={userInfo?.email}
                type="text"
                placeholder="Enter your email address"
                className=" opacity-100 border border-[#E1E1E1] w-full input_field input mt-[12px]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Image</label>
            <div className="flex  items-center justify-between">
              <div className="flex items-center gap-15 mt-[12px]">
                {selectedFile && (
                  <img
                    src={selectedFile}
                    alt="Selected"
                    className="w-[60px] h-[60px] object-cover rounded-full"
                  />
                )}
                <button
                  type="button"
                  className="px-14 h-[33px] bg-white border border-[#E1E1E1] rounded-8 choose_btn"
                  onClick={handleChooseButtonClick}
                >
                  Choose
                </button>
                <input
                  type="file"
                  name=""
                  className="hidden"
                  id=""
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <button
                    className="flex items-center"
                    onClick={handleRemoveButtonClick}
                  >
                    <img src={delet} alt="delete" />
                    Remove
                  </button>
                )}
              </div>
              <p className="text-base font-sans font-normal text-[#636363] ">
                JPG, GIF or PNG, 3MB Max
              </p>
            </div>
          </div>

          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <div>
              <label className="">Username</label>
              <input
                required
                type="text"
                placeholder="Enter your username"
                className="border border-[#E1E1E1] w-full input_field input mt-[12px] opacity-100"
              />
            </div>
            <div>
              <label className="">Email</label>
              <input
                required
                type="text"
                placeholder="Enter your email address"
                className=" opacity-100 border border-[#E1E1E1] w-full input_field input mt-[12px]"
              />
            </div>
          </div> */}

          <div className="">
            <div>
              <label className="">Details</label>
              <textarea
                required
                value={userInfo?.details ? userInfo?.details : ""}
                onChange={handleInputChange}
                type="text"
                name="details"
                placeholder="Write a about....."
                className="border border-[#E1E1E1] h-[139px] w-full  p-14 rounded-8     mt-[12px]"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
            <div>
              <label className="">Phone Number</label>
              <input
                required
                onChange={handleInputChange}
                type="number"
                name="phoneNumber"
                placeholder="Enter your number"
                value={userInfo?.phoneNumber}
                className=" opacity-100 border border-[#E1E1E1] w-full input_field input mt-[12px]"
              />
            </div>
            <div>
              <label className=" form-control">
                <div
                  className="label pt-0 pb-0"
                  style={{ paddingTop: "0", paddingBottom: "0" }}
                >
                  <span className="label-text pt-0 pb-0">Location</span>
                </div>
                <select
                  className="w-full select border-none  mt-[12px]"
                  onChange={handleInputChange}
                  name="country"
                >
                  {countryNames &&
                    countryNames?.length > 0 &&
                    countryNames.map((item, idx) => (
                      <option
                        selected={item?.name === userInfo?.country}
                        value={item?.name}
                        key={idx}
                      >
                        {item?.name}
                      </option>
                    ))}
                </select>
              </label>
            </div>
          </div>

          <div className="flex gap-20">
            <button
              type="submit"
              className="py-10 px-[22px] bg-base text-white text2 rounded-3 "
              style={{ color: "#fff" }}
              disabled={loading || Object.keys(editedInfo).length === 0}
            >
              {" "}
              {loading ? "Saving..." : "Save changes"}
            </button>

            <button
              type="button"
              className="rounded-3 bg-[#E9E9F7] py-10 px-[45px] font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Acount;
