import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByCategory } from "../actions/posts";

import ListPosts from "../components/ListPosts";
import RegisterDialog from "../components/RegisterDialog";

class Categories extends Component {
  state = {
    openDialog: false
  };
  componentDidMount() {
    this.loadPostsByCategory(this.props.match.params.category);
  }

  openDialog = () => {
    this.setState({ openDialog: true });
  };

  componentWillReceiveProps = ({ posts, match }) => {
    this.loadPostsByCategory(match.params.category);
  };

  loadPostsByCategory = category => {
    this.props.carregarPosts(category);
  };

  render() {
    const { posts, match } = this.props;
    return (
      <div>
        <h2>Posts sobre {match.params.category}</h2>
        <RegisterDialog />
        {posts && <ListPosts posts={posts} />}
        {!posts.length && <p>Não há nenhum post cadastrado nessa categoria.</p>}
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
  carregarPosts: category => dispatch(getPostsByCategory(category))
});

export default connect(MapStateToProps, MapDispatchToProps)(Categories);
