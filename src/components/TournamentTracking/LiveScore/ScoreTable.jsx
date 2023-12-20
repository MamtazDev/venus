import c1 from "../../../assets/icons/c1.png";
const ScoreTable = () => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-dark_sky text-white text-sm font-semibold font-sans ">
              <th className=" py-[17px] flex-grow-4 w-[60%]">Teams</th>
              <th className=" py-[17px]  text-center">M</th>
              <th className=" py-[17px]  text-center">W</th>
              <th className=" py-[17px]  text-center">L</th>
              <th className=" py-[17px]  text-center">T</th>
              <th className=" py-[17px] text-center">NRR</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5, 6].map((data, index) => (
              <>
                <tr
                  key={index}
                  className="border-y border-border2 bg-white text3 items-center"
                  style={{ color: "#222" }}
                >
                  <td className="text-left flex gap-8 items-center">
                    <img src={c1} alt="" /> {data}.Scotland
                  </td>
                  <td className="text-center  py-[17px]">36</td>
                  <td className="text-center  py-[17px]">24</td>
                  <td className="text-center  py-[17px]">10</td>
                  <td className="text-center  py-[17px]">0</td>
                  <td className="text-center  py-[17px]">.647</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ScoreTable;
