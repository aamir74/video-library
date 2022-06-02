import { useEffect, useState } from "react";
import { useFilter } from "../../../hooks/context/filter-context";
import { getAllCategories } from "../../../services/categories/getAllCategories";

import "./Filters.css";

const Filters = () => {
  const { state, dispatch } = useFilter();
  const [categories, setCategories] = useState([]);
  const [dateFilter, setDateFilter] = useState(true);

  const getCategories = async () => {
    try {
      const category = await getAllCategories();
      console.log({ category });
      if (category.data.categories.length) {
        setCategories(category.data.categories);
      }
    } catch (err) {
      console.log(err);
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
                onClick={() =>
                  dispatch({ type: "CATEGORY", category: el.categoryName })
                }
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
                dispatch({ type: "SORT_BY_LATEST" });
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
              dispatch({ type: "CLEAR_SORT" });
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
