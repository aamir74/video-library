import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const addPlaylist = async (playlist, token) => {
  return axios.post(
    `${apiConstants.ADD_PLAYLIST}`,
    { playlist },
    {
      headers: { authorization: token },
    }
  );
};

export { addPlaylist };
