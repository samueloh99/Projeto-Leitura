import { LOAD_COMMENTS, ADD_COMMENT } from "../actions/comments";

export default function comments(state = [], action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      const stateUpdated = state.concat(action.comment);
      return stateUpdated;
    default:
      return state;
  }
}
