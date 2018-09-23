import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/posts";

import Post from "../components/Post";
import RegisterDialog from "../components/RegisterDialog";

class Posts extends Component {
  state = {
    openDialog: false
  };
  componentDidMount() {
    this.props.carregarPosts();
  }

  openDialog = () => {
    this.setState({ openDialog: true });
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        <RegisterDialog />
        {posts &&
          posts.map(post => (
            <Post
              key={post.id}
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

const MapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const MapDispatchToProps = dispatch => ({
  carregarPosts: () => dispatch(getPosts())
});

export default connect(MapStateToProps, MapDispatchToProps)(Posts);
