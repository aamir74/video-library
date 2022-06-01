const searchFilter = (videos, searchKey) => {
  if (searchKey.length > 2) {
    const searchedData = videos.filter(
      (item) =>
        item.title.toLowerCase().includes(searchKey.toLowerCase()) ||
        item.description.toLowerCase().includes(searchKey.toLowerCase())
    );

    return searchedData;
  }

  return videos;
};
export { searchFilter };
