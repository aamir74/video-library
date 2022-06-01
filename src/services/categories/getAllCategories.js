import axios from "axios";
import { apiConstants } from "../../utils/apiConstatnts";

const getAllCategories = async () => {
  return axios.get(apiConstants.GET_ALL_CATEGORIES);
};

export { getAllCategories };
