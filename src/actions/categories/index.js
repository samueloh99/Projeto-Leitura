import * as API from "../../services/Api";

import { LOAD_CATEGORIES, LOAD_POSTS_CATEGORY } from "./actionTypes";

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
