import axios from "axios";
import uuidvl from "uuid/v1";

const headers = {
  Accept: "application/json",
  Authorization: "whatever-you-want"
};

const api = axios.create({
  baseURL: "http://localhost:3001",
  headers
});

export const getAllPosts = () => {
  return api.get("/posts").then(response => response.data);
};

export const getAllCategories = () => {
  return api.get("categories").then(response => response.data.categories);
};

export const savePost = (post, successCallback, errorCallback) => {
  post.id = uuidvl();
  return api.post("/posts", post);
};
