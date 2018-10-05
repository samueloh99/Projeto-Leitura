import React, { Component } from "react";
import ListComments from "../components/ListComments";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostById } from "../actions/posts";
import Post from "../components/Post";
import RegisterDialog from "../components/RegisterDialog";
import RegisterComment from "../components/RegisterComment";
import { getComments } from "../actions/comments";

class PostDetails extends Component {
  componentDidMount() {
    const { carregarPost, carregarComentarios, match } = this.props;
    const { post_id } = match.params;
    carregarPost(post_id);
    carregarComentarios(post_id);
  }
  render() {
    const { post, comments } = this.props;
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
          corpo={post.body}
        />
        <RegisterComment idPost={post.id} />
        <ListComments comments={comments} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    post: state.post,
    comments: state.comments
  };
};

const MapDispatchToProps = dispatch => ({
  carregarPost: id => dispatch(getPostById(id)),
  carregarComentarios: idPost => dispatch(getComments(idPost))
});

export default connect(MapStateToProps, MapDispatchToProps)(PostDetails);
