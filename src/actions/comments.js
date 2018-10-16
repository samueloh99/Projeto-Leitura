import * as API from "../services/Api";

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const deleteComment = id => ({
  type: DELETE_COMMENT,
  id
});

export const getComments = idPost => {
  return dispatch => {
    API.getAllComments(idPost).then(comments => {
      dispatch(loadComments(comments));
    });
  };
};

export const deleteCommentById = (id, successCallback) => {
  return dispatch => {
    API.deleteComment(id).then(() => {
      if (successCallback) successCallback();
      dispatch(deleteComment(id));
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

export const saveVote = (id, typeVote) => {
  return dispatch => {
    API.sendVoteComments(id, typeVote).then(response => {
      const updatedComment = response.data;
      dispatch(updateComment(updatedComment));
    });
  };
};

export const editComment = (comment, successCallback) => {
  return dispatch => {
    API.updateComment(comment).then(response => {
      const updatedComment = response.data;
      dispatch(updateComment(updatedComment));
      if (successCallback) successCallback();
    });
  };
};
