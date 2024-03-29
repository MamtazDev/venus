import React, { createContext, useEffect, useState } from "react";
import { getAllTeamsBySeasonId } from "../api/publicApis";
import { getLeagueInfo, getLeaguesUsersData } from "../api/league";
import { useParams } from "react-router-dom";
import {
  getLeagueAuctionSettings,
  getLeagueAuctions,
  getLeagueMessaes,
} from "../api/auction";

export const LeagueContext = createContext();

const LeagueInfoProvider = ({ children }) => {
  // const [loadingInfo, setLoadingInfo] = useState({
  //   leagueInfo: false,
  //   allTeamsInfo: false,
  //   leagueAuctionInfo: false,
  // });

  const [leagueBasicInfo, setLeagueBasicInfo] = useState(null);
  const [allTeamsInfo, setAllTeamsInfo] = useState(null);
  const [auctionSettings, setAutionSettings] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [leagueUsersData, setLeagueUserData] = useState(null);
  const [leagueAuctions, setLeaguesAuctions] = useState(null);
  const [auctionMessages, setAuctionMessages] = useState([]);
  const [selectBtn, setSelectBtn] = useState("Home");

  const { id } = useParams();

  // league info
  const fetchLeagueInfo = async () => {
    const leagueRes = await getLeagueInfo(id);
    setLeagueBasicInfo(leagueRes?.data);

    const auctionSettingsRes = await getLeagueAuctionSettings(id);
    setAutionSettings(auctionSettingsRes?.data);

    const res = await getLeaguesUsersData(id);
    setLeagueUserData(res?.data);

    // setLoadingInfo({ ...loadingInfo, leagueInfo: false });
  };

  // leagueteams
  const fetchAllTeams = async () => {
    const teamsRes = await getAllTeamsBySeasonId(leagueBasicInfo?.eventScopeId);
    setAllTeamsInfo(teamsRes?.data);
    // setLoadingInfo({ ...loadingInfo, allTeamsInfo: false });
  };

  // leagueAuctions
  const fetchLeagueAuctions = async () => {
    const res = await getLeagueAuctions(id);
    setLeaguesAuctions(res?.data);
    if (res?.data?.length > 0) setSelectedTeam(res?.data[0]?.team);
    // setLoadingInfo({ ...loadingInfo, leagueAuctionInfo: false });
  };

  const fetchLeagueMessages = async () => {
    const res = await getLeagueMessaes(id);
    setAuctionMessages(res?.data);
  };

  useEffect(() => {
    fetchLeagueInfo();
    fetchLeagueAuctions();
    fetchLeagueMessages();
    if (leagueBasicInfo?.eventScopeId) fetchAllTeams();
  }, [id, leagueBasicInfo?.eventScopeId]);

  const info = {
    leagueBasicInfo,
    setLeagueBasicInfo,
    allTeamsInfo,
    setAllTeamsInfo,
    id,
    auctionSettings,
    setAutionSettings,
    selectedTeam,
    setSelectedTeam,
    leagueUsersData,
    setLeagueUserData,
    leagueAuctions,
    fetchLeagueAuctions,
    fetchAllTeams,
    fetchLeagueInfo,
    fetchLeagueMessages,
    auctionMessages,
    setAuctionMessages,
    selectBtn,
    setSelectBtn,
    // loadingInfo,
  };

  return (
    <LeagueContext.Provider value={info}>{children}</LeagueContext.Provider>
  );
};

export default LeagueInfoProvider;
