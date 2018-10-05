import { combineReducers } from "redux";
import { posts, post } from "./postsReducer";
import categories from "./categories";
import snack from "./snackReducer";
import comments from "./commentsReducer";

export default combineReducers({ posts, post, categories, snack, comments });
