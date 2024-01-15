import React, { createContext, useEffect, useState } from "react";
import { getAllTeamsBySeasonId } from "../api/publicApis";
import { getLeagueInfo, getLeaguesUsersData } from "../api/league";
import { useParams } from "react-router-dom";
import { getLeagueAuctionSettings } from "../api/auction";

export const LeagueContext = createContext();

const LeagueInfoProvider = ({ children }) => {
  const [leagueBasicInfo, setLeagueBasicInfo] = useState(null);
  const [allTeamsInfo, setAllTeamsInfo] = useState(null);
  const [auctionSettings, setAutionSettings] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [leagueUsersData, setLeagueUserData] = useState(null);

  const { id } = useParams();

  // league info
  const fetchLeagueInfo = async () => {
    const leagueRes = await getLeagueInfo(id);
    setLeagueBasicInfo(leagueRes?.data);

    const auctionSettingsRes = await getLeagueAuctionSettings(id);
    setAutionSettings(auctionSettingsRes?.data);

    const res = await getLeaguesUsersData(id);
    setLeagueUserData(res?.data);
  };

  // leagueteams
  const fetchAllTeams = async () => {
    const teamsRes = await getAllTeamsBySeasonId(leagueBasicInfo?.eventScopeId);
    setAllTeamsInfo(teamsRes?.data);
  };

  // selected Teams info

  useEffect(() => {
    fetchLeagueInfo();
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
  };

  return (
    <LeagueContext.Provider value={info}>{children}</LeagueContext.Provider>
  );
};

export default LeagueInfoProvider;
