import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const removeFromWatchLater = async (videoId, token) => {
  return axios.delete(`${apiConstants.REMOVE_FROM_WATCH_LATER}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeFromWatchLater };
