import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
  const response = await axios.get(url, {
    params: {
      api_key: ENV_VARS.TMDB_API_KEY,
    },
    headers: {
      accept: "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
  }

  return response.data;
};
