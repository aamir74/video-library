import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const addVideoToPlaylist = async (playlistId, video,token) => {
  return axios.post(
    `${apiConstants.ADD_VIDEO_TO_PLAYLIST}/${playlistId}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addVideoToPlaylist };
