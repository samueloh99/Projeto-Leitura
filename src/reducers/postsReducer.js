import { LOAD_POSTS, INSERT_POST, UPDATE_POST } from "../actions/posts";

export default function posts(state = [], action) {
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
}
