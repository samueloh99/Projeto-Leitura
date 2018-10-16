import * as API from "../../services/Api";
import { addPostComment, removePostComment } from "../posts";

import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from "./actionTypes";

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
      dispatch(deleteComment(id));
      dispatch(removePostComment());
      if (successCallback) successCallback();
    });
  };
};

export const saveComment = (comment, successCallback) => {
  return dispatch => {
    API.saveComment(comment).then(response => {
      const newComment = response.data;
      dispatch(addComment(newComment));
      dispatch(addPostComment());
      if (successCallback) successCallback();
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
