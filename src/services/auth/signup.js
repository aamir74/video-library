import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const signup = async (user) => {
  try {
    return axios.post(apiConstants.SIGNUP, user);
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};

export { signup };
