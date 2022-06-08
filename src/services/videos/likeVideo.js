import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const likeVideo = async (video, token) => {
  return axios.post(
    `${apiConstants.LIKE_VIDEO}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { likeVideo };
