import {
  LOAD_POSTS,
  INSERT_POST,
  UPDATE_POST,
  GET_POST,
  DELETE_POST,
  ADD_POST_COMMENT,
  REMOVE_POST_COMMENT
} from "../actions/posts/actionTypes";

export const posts = (state = [], action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    case INSERT_POST:
      const stateUpdated = state.concat(action.post);
      return stateUpdated;
    case UPDATE_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          post = action.post;
        }
        return post;
      });
    default:
      return state;
  }
};

export const post = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      return action.post;
    case UPDATE_POST:
      return action.post;
    case DELETE_POST:
      return {};
    case ADD_POST_COMMENT:
      state.commentCount += 1;
      return state;
    case REMOVE_POST_COMMENT:
      state.commentCount -= 1;
      return state;
    default:
      return state;
  }
};
