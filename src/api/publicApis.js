import AXIOS from "./axiosInstance";
import PUBLIC_API_AXIOS from "./publicApiInstance";

// export const getAllPublicLeagues = async () => {
//   const response = PUBLIC_API_AXIOS.get(
//     `/v3/football/leagues?api_token=${import.meta.env.VITE_PUBLIC_API_TOKEN}`,
//   );
//   return response;
// };

export const getAllPublicLeagues = async () => {
  const response = AXIOS.get("/public-api/all-leagues");
  return response;
};

export const getSeasonsByLeagueId = async (leagueId) => {
  const response = AXIOS.get(`/public-api/all-seasons/${leagueId}`);
  return response;
};
