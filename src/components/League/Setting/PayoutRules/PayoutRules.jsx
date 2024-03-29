import { useState } from "react";

const PayoutRules = () => {
  const [selectedOption, setSelectedOption] = useState("percentage");

  const handleRadioButtonChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
        <div className="p-32 bg-white rounded-8">
          <p className="text3">Calculation Mode</p>
          <hr className="my-[31px] border-[#F2F0F0]" />
          <select className="select select-bordered payoutSelect w-full text-[#414141]">
            <option disabled selected>
              manual
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="p-32 bg-white rounded-8">
          <p className="text3">Commissioners Fee</p>

          <div className="flex gap-[44px] mt-[28px] mb-[16px] payout_labels">
            <label>
              <input
                type="radio"
                name="gender"
                value="percentage"
                checked={selectedOption === "percentage"}
                onChange={() => handleRadioButtonChange("percentage")}
              />
              <span className="design"></span>
              <span className="value">Percentage</span>
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="absolute"
                checked={selectedOption === "absolute"}
                onChange={() => handleRadioButtonChange("absolute")}
              />
              <span className="design"></span>
              <span className="value">Absolute</span>
            </label>
          </div>

          <div className="relative">
            <input
              type="number"
              className="w-full  text-[#414141] opacity-1 py-12 px-14"
            />
            <p className="absolute top-[12px] right-[40px]">
              {selectedOption === "percentage" ? "%" : "$"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px] ">
        <button className="bg-base rounded-3 py-[12px] px-14 text-white font-sans text-base font-semibold customButton">
          Save Changes
        </button>
      </div>
      <div className="overflow-x-auto mt-[60px]">
        <table className="table">
          <thead className="bg-white">
            <tr className="border-0  ">
              <th className="text3  py-16 ps-40">Group Name </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-sky border border-[#F0F0F0]  ">
              <td>
                <textarea
                  className="textarea w-full p-0 h-[135px]"
                  placeholder="Write your Payout Rules"
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-[30px] ">
        <button className="bg-base rounded-3 py-[12px] px-14 text-white font-sans text-base font-semibold customButton">
          Save Payout Info
        </button>
      </div>
    </>
  );
};

export default PayoutRules;
