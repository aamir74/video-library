import axios from "axios";
import { apiConstants } from "../../utils/apiConstants";

const getAllCategories = async () => {
  return axios.get(apiConstants.GET_ALL_CATEGORIES);
};

export { getAllCategories };
