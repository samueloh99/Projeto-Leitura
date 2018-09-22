import * as API from "../services/Api";

export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = posts => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const getPosts = () => {
  return dispatch => {
    API.getAllPosts().then(posts => {
      dispatch(loadPosts(posts));
    });
  };
};
