import {
  LOAD_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT
} from "../actions/comments";

export default function comments(state = [], action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      const stateUpdated = state.concat(action.comment);
      return stateUpdated;
    case UPDATE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          comment = action.comment;
        }
        return comment;
      });
    default:
      return state;
  }
}
