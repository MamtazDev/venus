import AXIOS from "./axiosInstance";

export const getLeagueAuctionSettings = async (leagueId) => {
  const response = AXIOS.get(`/api/auction/settingsInfo/${leagueId}`);
  return response;
};

export const updateLeagueAuctionSettings = async ({ id, data }) => {
  const response = AXIOS.patch(
    `/api/auction/updateAuctionSettings/${id}`,
    data,
  );
  return response;
};
