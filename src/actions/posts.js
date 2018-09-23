import * as API from "../services/Api";

export const LOAD_POSTS = "LOAD_POSTS";
export const INSERT_POST = "INSERT_POST";
export const UPDATE_POST = "UPDATE_POST";

export const loadPosts = posts => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const insertNewPost = post => {
  return {
    type: INSERT_POST,
    post
  };
};

export const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  };
};

export const getPosts = () => {
  return dispatch => {
    API.getAllPosts().then(posts => {
      dispatch(loadPosts(posts));
    });
  };
};

export const insertPost = (post, successCallback) => {
  return dispatch => {
    API.savePost(
      {
        ...post
      },
      successCallback
    ).then(response => {
      const newPost = response.data;
      if (successCallback) successCallback();
      dispatch(insertNewPost(newPost));
    });
  };
};

export const saveVote = (id, typeVote) => {
  return dispatch => {
    API.sendVote(id, typeVote).then(response => {
      const updatedPost = response.data;
      dispatch(updatePost(updatedPost));
    });
  };
};
