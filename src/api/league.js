import AXIOS from "./axiosInstance";

export const createLeague = async (data) => {
  const response = await AXIOS.post("/api/league/create", data);
  return response;
};

export const joinLeague = async (inviteCode) => {
  const response = await AXIOS.post(
    `/api/league/join?inviteCode=${inviteCode}`,
  );
  return response;
};

export const getUserLeaguesInfo = async () => {
  const response = await AXIOS.get("/api/league/userLeagues");
  return response;
};
export const getLeaguesUsersData = async (leagueId) => {
  const response = await AXIOS.get(`/api/league/leagueUsersData/${leagueId}`);
  return response;
};
export const getLeagueInfo = async (leagueId) => {
  const response = await AXIOS.get(`/api/league/leagueInfo/${leagueId}`);
  return response;
};
export const updateLeagueInfo = async ({ leagueId, data }) => {
  const response = await AXIOS.patch(
    `/api/league/updateLeagueInfo/${leagueId}`,
    data,
  );
  return response;
};
export const removeUserFromLeague = async (id) => {
  const response = await AXIOS.delete(`/api/league/removeUserFromLeague/${id}`);
  return response;
};
