import { categoryFilter } from "../filters/category";
import { searchFilter } from "../filters/search";
import { sortFilter } from "../filters/sort";

const getVideosData = (data, setVideos, state) => {
  let videosList = data;
  videosList = sortFilter(videosList, state.sortBy);
  videosList = searchFilter(videosList, state.search);
  videosList = categoryFilter(videosList, state.category);
  setVideos(videosList);
};
export { getVideosData };
