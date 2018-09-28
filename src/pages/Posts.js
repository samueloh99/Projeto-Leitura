import React, { Component } from "react";
import { connect } from "react-redux";
import { getPosts } from "../actions/posts";

import ListPosts from "../components/ListPosts";
import RegisterDialog from "../components/RegisterDialog";

import { withRouter } from "react-router-dom";

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
        <ListPosts posts={posts} />
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

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(Posts));
