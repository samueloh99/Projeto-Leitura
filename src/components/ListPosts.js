import React, { Component } from "react";
import Post from "./Post";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class ListPosts extends Component {
  state = {
    posts: [],
    descending: true
  };

  componentWillReceiveProps(nextProps) {
    const { posts } = nextProps || [];
    this.setState({ posts: this.sortPosts(posts) });
  }

  sortPosts = posts => {
    const { descending } = this.state;
    if (posts && posts.length) {
      posts.sort((postA, postB) => {
        if (descending) return postB.voteScore - postA.voteScore;
        return postA.voteScore - postB.voteScore;
      });
    }
    return posts;
  };

  sortList = () => {
    this.setState(
      {
        descending: !this.state.descending
      },
      () => {
        this.setState({ posts: this.sortPosts(this.state.posts) });
      }
    );
  };

  render() {
    const { posts, descending } = this.state;
    return (
      <div>
        <Button className="sort-posts" onClick={() => this.sortList()}>
          Posts
          <Icon>{descending ? "arrow_downward" : "arrow_upward"}</Icon>
        </Button>
        {posts &&
          posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              titulo={post.title}
              autor={post.author}
              totalPontos={post.voteScore}
              totalComentarios={post.commentCount}
            />
          ))}
      </div>
    );
  }
}

export default ListPosts;
