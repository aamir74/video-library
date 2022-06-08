import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getPlaylists = async (token) => {
  return axios.get(`${apiConstants.GET_ALL_PLAYLIST}`, {
    headers: { authorization: token },
  });
};

export { getPlaylists };
