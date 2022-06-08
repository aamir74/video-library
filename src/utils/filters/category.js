const categoryFilter = (data, category) => {
  if (category.length) {
    const categoryFilteredData = data.filter((item) =>
      category.includes(item.category)
    );
    if (categoryFilteredData.length > 0) {
      return categoryFilteredData;
    } else return categoryFilteredData;
  } else return data;
};

export { categoryFilter };
