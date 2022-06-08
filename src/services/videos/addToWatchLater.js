import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const addToWatchLater = async (video, token) => {
  return axios.post(
    `${apiConstants.ADD_TO_WATCH_LATER}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addToWatchLater };
