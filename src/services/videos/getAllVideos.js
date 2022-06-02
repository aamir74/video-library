import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getAllVideos = async () => {
  return axios.get(apiConstants.GET_ALL_VIDEOS);
};

export { getAllVideos };
