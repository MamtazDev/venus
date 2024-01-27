import active from "../../../assets/icons/greencircle.png";
const BidMember = ({ leagueUsersData, user, leagueAuctions }) => {
  // console.log(leagueUsersData, "leagueUsersData");
  console.log(leagueAuctions, "fjksdfj");

  const myTeams = leagueAuctions?.filter((i) => i.owner?._id === user?._id);

  return (
    <div>
      {/* my team */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="px-20 pt-[24px] pb-20 bg-white rounded-3 mt-[10px]">
          <div className="flex justify-between  border-b border-border2">
            <p className="text2 pb-[15px]">My Team</p>
            <p className="text2 pb-[15px]">Paid</p>
          </div>
          {myTeams?.length > 0 &&
            myTeams?.map((i, idx) => (
              <div className="flex justify-between  border-b border-border2 pt-10 ">
                <p className="text1 pb-[10px]">{i?.team?.name}</p>
                <p className="text1 pb-[10px]">${i?.price?.toFixed(2)}</p>
              </div>
            ))}
          {/* <div className="flex justify-between pt-10 ">
            <p className="text1 pb-[10px]">Houston</p>
            <p className="text1 pb-[10px]">$1.00</p>
          </div> */}
        </div>
        <div className="px-20 pt-[24px] pb-20 bg-white mt-[10px]">
          <div className="flex justify-between  border-b border-border2">
            <p className="text2 pb-[15px]">Member</p>
            <p className="text2 pb-[15px]">Total Paid</p>
          </div>
          {leagueUsersData &&
            leagueUsersData?.length > 0 &&
            leagueUsersData.map((item, idx) => (
              <div className="flex justify-between  pt-10 " key={idx}>
                <p className="text1 pb-[10px] flex items-center gap-[5px] ">
                  {" "}
                  <img src={active} alt="" /> {item?.user?.name}
                </p>
                <p className="text1 pb-[10px]">${item?.buyIn.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BidMember;
