const Roaster = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table font-sans">
          <thead className="bg-white">
            <tr className="border-0">
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Username{" "}
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Teams Purchased
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 ">
                Role
              </th>
              <th className="text-sm font-sans text-center  font-medium text-text_color1 "></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="bg-sky border border-[#F0F0F0] ">
              <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                Shamin
              </td>
              <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                0
              </td>
              <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                Creator
              </td>
              <td className="font-sans text-center font-medium text-sm text-text_color1 ">
                <button className="p-10  border text-[#939393] border-[#E1E1E1] bg-[#F2F2F2] rounded-8">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roaster;
