import { LOAD_POSTS, LOAD_CATEGORIES } from "../actions";

const initialState = {
  posts: null,
  categories: null
};
export default function posts(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      const posts = action.posts;
      return { ...state, posts };
    case LOAD_CATEGORIES:
      return { ...state };
    default:
      return state;
  }
}
