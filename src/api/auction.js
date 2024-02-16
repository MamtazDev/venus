import AXIOS from "./axiosInstance";

export const getLeagueAuctionSettings = async (leagueId) => {
  const response = await AXIOS.get(`/api/auction/settingsInfo/${leagueId}`);
  return response;
};

export const updateLeagueAuctionSettings = async ({ id, data }) => {
  const response = await AXIOS.patch(
    `/api/auction/updateAuctionSettings/${id}`,
    data,
  );
  return response;
};

export const createAuction = async (data) => {
  const response = await AXIOS.post("/api/auction/create", data);
  return response;
};

export const getLeagueAuctions = async (leagueId) => {
  const res = await AXIOS.get(`/api/auction/getLeagueAuctions/${leagueId}`);
  return res;
};

export const setTeamOwner = async ({ auctionId, data }) => {
  const res = await AXIOS.patch(`/api/auction/setTeamOwner/${auctionId}`, data);
  return res;
};

export const addMessage = async (data) => {
  const res = await AXIOS.post("/api/message/add", data);
  return res;
};

export const getLeagueMessaes = async (leagueId) => {
  const res = await AXIOS.get(`/api/message/getLeagueMessages/${leagueId}`);
  return res;
};

export const getMyBidInfo = async () => {
  const res = await AXIOS.get("/api/auction/getMybidInfo");
  return res;
};
