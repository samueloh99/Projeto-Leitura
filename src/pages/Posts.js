import React, { Component } from "react";
import Post from "../components/Post";
// import * as Api from "./services/Api";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class Posts extends Component {
  componentDidMount() {
    // const posts = Api.getAllPosts();
  }
  render() {
    return (
      <div>
        <Button
          className="button-add-post"
          variant="contained"
          color="secondary"
        >
          <Icon>add</Icon>
          Novo Post
        </Button>
        <Post />
      </div>
    );
  }
}

export default Posts;
