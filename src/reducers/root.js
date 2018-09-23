import { combineReducers } from "redux";
import posts from "./postsReducer";
import categories from "./categories";
import snack from "./snackReducer";

export default combineReducers({ posts, categories, snack });
