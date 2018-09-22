import * as API from "../services/Api";

export const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const getCategories = () => {
  return dispatch => {
    API.getAllCategories().then(categories => {
      dispatch(loadCategories(categories));
    });
  };
};
