import * as API from "../../services/Api";
import {
  LOAD_POSTS,
  INSERT_POST,
  UPDATE_POST,
  GET_POST,
  DELETE_POST,
  ADD_POST_COMMENT,
  REMOVE_POST_COMMENT
} from "./actionTypes";

export const loadPosts = posts => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const getPost = post => {
  return {
    type: GET_POST,
    post
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

export const deletePost = id => {
  return {
    type: DELETE_POST,
    id
  };
};

export const addPostComment = () => {
  return {
    type: ADD_POST_COMMENT
  };
};

export const removePostComment = () => {
  return {
    type: REMOVE_POST_COMMENT
  };
};

export const getPosts = () => {
  return dispatch => {
    API.getAllPosts().then(posts => {
      dispatch(loadPosts(posts));
    });
  };
};

export const getPostById = id => {
  return dispatch => {
    API.getPost(id).then(post => {
      dispatch(getPost(post));
    });
  };
};

export const getPostsByCategory = category => {
  return dispatch => {
    API.getAllPostsByCategory(category).then(posts => {
      dispatch(loadPosts(posts));
    });
  };
};

export const persistPost = (post, successCallback, isEdit = false) => {
  return dispatch => {
    if (isEdit) {
      API.updatePost({
        ...post
      }).then(response => {
        const updatedPost = response.data;
        if (successCallback) successCallback();
        dispatch(updatePost(updatedPost));
        dispatch(getPost(updatedPost));
      });
    } else {
      API.savePost({
        ...post
      }).then(response => {
        const newPost = response.data;
        if (successCallback) successCallback();
        dispatch(insertNewPost(newPost));
      });
    }
  };
};

export const deletePostById = (id, callbackSucess) => {
  return dispatch => {
    API.deletePost(id).then(response => {
      dispatch(deletePost(id));
      if (callbackSucess) callbackSucess();
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
