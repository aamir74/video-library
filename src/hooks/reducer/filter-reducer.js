const filterReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SORT_BY_LATEST":
      return { ...state, sortBy: action.type };
    case "CLEAR_SORT":
      return { ...state, sortBy: action.type };
    case "CATEGORY":
      if (!state.category.includes(action.category)) {
        return { ...state, category: [...state.category, action.category] };
      }
      const filterCategories = state.category.filter(
        (item) => item !== action.category
      );
      return { ...state, category: filterCategories };
    case "SEARCH":
      return { ...state, search: action.search };
    case "CLEAR":
      return {
        sortBy: "",
        category: [],
        search: "",
      };
    default:
      return state;
  }
};
export { filterReducer };
