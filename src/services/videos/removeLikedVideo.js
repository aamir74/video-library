import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const removeLikedVideo = async (videoId) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0ZjFmNC1lNTU3LTQwNjktYTVkMy1iYWFiNjJiM2RkN2UiLCJlbWFpbCI6ImFhbWlyQGdtYWlsLmNvbSJ9.oOa0lNv96lbOFbv_Lww22KqdIhseZFlqtJxGJh_N3xU";
  return axios.delete(`${apiConstants.REMOVE_LIKED_VIDEO}/${videoId}`, {
    headers: { authorization: token },
  });
};

export { removeLikedVideo };
