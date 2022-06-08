import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const login = async (user) => {
  try {
    return axios.post(apiConstants.LOGIN, user);
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { login };
