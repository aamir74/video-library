import axios from "axios";
import { apiConstants } from "../../utils/apiConstatnts";

const getAllVideos = async () => {
  return axios.get(apiConstants.GET_ALL_VIDEOS);
};

export { getAllVideos };
