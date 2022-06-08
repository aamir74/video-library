import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getAllWatchLaterVideos = async (token) => {
  return axios.get(`${apiConstants.WATCH_LATER_VIDEOS}`, {
    headers: { authorization: token },
  });
};

export { getAllWatchLaterVideos };
