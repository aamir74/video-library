import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "",
  category: [],
  search: "",
};
const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortByLatest: (state, action) => {
      state.sortBy = action.payload.type;
    },
    clearSort: (state, action) => {
      state.sortBy = action.payload.type;
    },
    category: (state, action) => {
      if (!state.category.includes(action.payload.category)) {
        state.category = [...state.category, action.payload.category];
      } else {
        const filterCategories = state.category.filter(
          (item) => item !== action.payload.category
        );
        state.category = filterCategories;
      }
    },
    search: (state, action) => {
      state.search = action.payload.search;
    },
    clear: (state, action) => {
      state = initialState;
    },
  },
});
export const { sortByLatest, clearSort, category, search, clear } =
  filterSlice.actions;
export default filterSlice.reducer;
