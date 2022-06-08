import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const removePlaylist = async (playlistId, token) => {
  return axios.delete(`${apiConstants.REMOVE_PLAYLIST}/${playlistId}`, {
    headers: { authorization: token },
  });
};

export { removePlaylist };
