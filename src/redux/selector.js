export const authSelector = (state) => state.auth;
export const quizzesSelector = (state) => state.quizzes;
export const categoriesSelector = (state) => state.categories;
export const filtersSelector = (state) => state.filters;

export const categoriesFilteredSelector = createSelector(
  categoriesSelector,
  filtersSelector,
  (categories, filters) => {
    return categories.filter((category) =>
      category.title.toUpperCase().includes(filters.categoryTitle.toUpperCase())
    );
  }
);
