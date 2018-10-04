import React, { Component } from "react";
import Comment from "../components/Comment";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostById } from "../actions/posts";
import Post from "../components/Post";
import RegisterDialog from "../components/RegisterDialog";

class PostDetails extends Component {
  componentDidMount() {
    const { post_id } = this.props.match.params;
    this.props.carregarPost(post_id);
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link className="link-default" to="/">
          <Button>Voltar</Button>
        </Link>
        <RegisterDialog isEdit={true} post={post} />
        <Post
          id={post.id}
          titulo={post.title}
          autor={post.author}
          totalPontos={post.voteScore}
          totalComentarios={post.commentCount}
          categoria={post.category}
        />
        <h4>Comentários</h4>
        <Comment />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    post: state.post
  };
};

const MapDispatchToProps = dispatch => ({
  carregarPost: id => dispatch(getPostById(id))
});

export default connect(MapStateToProps, MapDispatchToProps)(PostDetails);
