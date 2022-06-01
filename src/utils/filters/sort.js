const sortFilter = (videos, sortBy) => {
  if (sortBy === "SORT_BY_LATEST")
    return [...videos].sort(
      (item1, item2) =>
        new Date(item2.uploaded_on) - new Date(item1.uploaded_on)
    );
  else if (sortBy === "CLEAR_SORT") return [...videos];

  return videos;
};
export { sortFilter };
