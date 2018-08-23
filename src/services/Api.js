const api = "http://localhost:3001";

const headers = {
  Accept: "application/json",
  Authorization: "whatever-you-want"
};

export const getAllPosts = () => {
  fetch(`${api}/posts`, { headers })
    .then(response => {
      response.json();
    })
    .then(posts => posts);
};
