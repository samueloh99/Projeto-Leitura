import * as API from "../services/Api";

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";

export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const getComments = idPost => {
  return dispatch => {
    API.getAllComments(idPost).then(comments => {
      dispatch(loadComments(comments));
    });
  };
};

export const saveComment = (comment, successCallback) => {
  return dispatch => {
    API.saveComment(comment).then(response => {
      if (successCallback) successCallback();
      const newComment = response.data;
      dispatch(addComment(newComment));
    });
  };
};
