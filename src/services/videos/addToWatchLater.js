import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const addToWatchLater = async (video) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmY0ZjFmNC1lNTU3LTQwNjktYTVkMy1iYWFiNjJiM2RkN2UiLCJlbWFpbCI6ImFhbWlyQGdtYWlsLmNvbSJ9.oOa0lNv96lbOFbv_Lww22KqdIhseZFlqtJxGJh_N3xU";
  return axios.post(
    `${apiConstants.ADD_TO_WATCH_LATER}`,
    { video },
    {
      headers: { authorization: token },
    }
  );
};

export { addToWatchLater };