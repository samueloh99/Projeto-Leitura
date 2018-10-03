import * as API from "../services/Api";

export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const LOAD_POSTS_CATEGORY = "LOAD_POSTS_CATEGORY";

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories
});

export const loadPosts = posts => ({
  type: LOAD_POSTS_CATEGORY,
  posts
});

export const getCategories = () => {
  return dispatch => {
    API.getAllCategories().then(categories => {
      dispatch(loadCategories(categories));
    });
  };
};
