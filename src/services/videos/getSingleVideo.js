import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getSingleVideo = async (videoId) => {
  return axios.get(`${apiConstants.GET_SINGLE_VIDEO}/${videoId}`);
};

export { getSingleVideo };
