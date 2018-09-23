import { LOAD_POSTS, INSERT_POST } from "../actions/posts";

export default function posts(state = [], action) {
  console.log(action);
  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;
    case INSERT_POST:
      const stateUpdated = state.concat(action.post);
      return stateUpdated;
    default:
      return state;
  }
}
