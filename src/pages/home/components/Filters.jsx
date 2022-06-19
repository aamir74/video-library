import { useEffect, useState } from "react";
import { useNotifications } from "reapop";
import { useDispatch, useSelector } from "react-redux";

import { getAllCategories } from "../../../services/categories/getAllCategories";
import {
  category,
  clear,
  clearSort,
  sortByLatest,
} from "../../../redux/slices/FilterSlice";

import "./Filters.css";

const Filters = () => {
  const { notify } = useNotifications();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.filters);
  const [categories, setCategories] = useState([]);
  const [dateFilter, setDateFilter] = useState(true);

  const getCategories = async () => {
    try {
      const category = await getAllCategories();
      if (category.data.categories.length) {
        setCategories(category.data.categories);
      }
    } catch (err) {
      console.log(err);
      notify({
        title: <h3>Error Occured</h3>,
        message: <h5>Something went wrong, Please try again</h5>,
        status: "error",
        dismissible: true,
        dismissAfter: 5000,
        showDismissButton: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="filters-column">
      <div className="category-list">
        {categories.length
          ? categories.map((el, i) => (
              <div
                key={el._id}
                className={`category-chip ${
                  state.category.includes(el.categoryName)
                    ? "active-category-chip"
                    : ""
                }`}
                onClick={() => {
                  dispatch(
                    category({ type: "CATEGORY", category: el.categoryName })
                  );
                }}
              >
                {el.categoryName}
              </div>
            ))
          : ""}
      </div>
      <div className="sort-date">
        {dateFilter ? (
          <>
            <div
              onClick={() => {
                dispatch(sortByLatest({ type: "SORT_BY_LATEST" }));
                setDateFilter(false);
              }}
            >
              <i className="fa fa-sort-amount-desc" aria-hidden="true" />
              <span> Sort Latest</span>
            </div>
          </>
        ) : (
          <span
            onClick={() => {
              dispatch(clearSort({ type: "CLEAR_SORT" }));
              setDateFilter(true);
            }}
          >
            Clear
          </span>
        )}
      </div>
    </div>
  );
};

export { Filters };
