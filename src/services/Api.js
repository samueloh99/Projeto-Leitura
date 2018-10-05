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

export const getPost = id => {
  return api.get(`/posts/${id}`).then(response => response.data);
};

export const getAllPostsByCategory = category => {
  return api.get(`/${category}/posts`).then(response => response.data);
};

export const getAllCategories = () => {
  return api.get("categories").then(response => response.data.categories);
};

export const savePost = post => {
  post.id = uuidvl();
  return api.post("/posts", post);
};

export const updatePost = ({ id, title, body }) => {
  return api.put(`/posts/${id}`, {
    title,
    body
  });
};

export const sendVote = (id, type) => {
  return api.post("/posts/" + id, { option: type });
};

export const getAllComments = idPost => {
  return api.get(`/posts/${idPost}/comments`).then(response => response.data);
};

export const saveComment = comment => {
  comment.id = uuidvl();
  return api.post("/comments", comment);
};
