import { useContext } from "react";
import edit from "../../../../assets/icons/edit.svg";
import { LeagueContext } from "../../../../contexts/LeagueInfoProvider";
import { AuthContext } from "../../../../contexts/AuthProvider";
const General = () => {
  const { leagueBasicInfo, setSelectBtn } = useContext(LeagueContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      {/* delete league */}
      <div className="flex flex-col gap-20">
        {leagueBasicInfo?.creatorId === user?._id && (
          <div className="p-20 bg-white flex justify-between items-center rounded-3">
            {/* <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">
            Delete League
          </h2> */}

            <button
              className="py-10 px-23 bg-base text-white rounded-3 customButton"
              onClick={() => setSelectBtn("Team")}
            >
              Pay Team
            </button>
          </div>
        )}
        <div className="p-20 bg-white flex justify-between items-center rounded-3">
          {/* <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">Cricket</h2> */}
          {/* <button className="py-10 px-23 bg-white text-white rounded-3"><img src={edit} alt="" /></button> */}
          <div className="relative w-full">
            <input
              type="text"
              className="w-full h-[40px] ps-[10px] "
              value={leagueBasicInfo?.leagueName}
              readOnly
            />
            {/* <div className="absolute top-[6px] right-[11px]">
              <img className="cursor-pointer" src={edit} alt="" />
            </div> */}
          </div>
        </div>
        <div className="p-20 bg-white  rounded-3 invite_id">
          <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">
            Invite Code
          </h2>
          <input
            type="text"
            className="  w-full border-0 py-10 ps-20 font-sans text-sm text-[#000] bg-light_sky mt-[15px] cursor-copy"
            value={leagueBasicInfo?.inviteCode}
            readOnly
          />
        </div>
        <div className="p-20 bg-white  rounded-3 invite_id">
          <h2 className="font-sans font-semibold text-lg text-text_dark_grey ">
            Invite URL
          </h2>

          <input
            type="text"
            className="  w-full border-0 py-10 ps-20 font-sans text-sm text-[#000] bg-light_sky mt-[15px] cursor-copy"
            value={`${
              import.meta.env.VITE_MAIN_WEBSITE
            }/joinLeague?inviteCode=${leagueBasicInfo?.inviteCode}`}
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default General;
