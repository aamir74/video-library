import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getAllLikedVideos = async (token) => {
  return axios.get(`${apiConstants.LIKE_VIDEO}`, {
    headers: { authorization: token },
  });
};

export { getAllLikedVideos };
