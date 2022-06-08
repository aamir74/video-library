import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const removeVideoFromPlaylist = async (playlistId, videoId, token) => {
  return axios.delete(
    `${apiConstants.REMOVE_VIDEO_FROM_PLAYLIST}/${playlistId}/${videoId}`,
    {
      headers: { authorization: token },
    }
  );
};

export { removeVideoFromPlaylist };
