import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const removeLikedVideo = async (videoId,token) => {
   return axios.delete(`${apiConstants.REMOVE_LIKED_VIDEO}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeLikedVideo };
