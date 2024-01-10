import PUBLIC_API_AXIOS from "./publicApiInstance";

export const getAllPublicLeagues = async () => {
  const response = PUBLIC_API_AXIOS.get(
    `/v3/football/leagues?api_token=${import.meta.env.VITE_PUBLIC_API_TOKEN}`,
  );
  return response;
};
