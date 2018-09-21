import * as API from "../services/Api";

export const LOAD_POSTS = "LOAD_POSTS";
export const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const loadPosts = posts => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const loadCategories = () => ({
  type: LOAD_CATEGORIES
});

export const getPosts = () => {
  return dispatch => {
    API.getAllPosts().then(posts => {
      dispatch(loadPosts(posts));
    });
  };
};
