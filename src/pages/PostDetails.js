import React, { Component } from "react";
import ListComments from "../components/ListComments";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPostById, deletePostById } from "../actions/posts";
import Post from "../components/Post";
import RegisterDialog from "../components/RegisterDialog";
import RegisterComment from "../components/RegisterComment";
import { getComments } from "../actions/comments";
import { showSnack } from "../actions/snack";

class PostDetails extends Component {
  state = {
    comment: ""
  };

  componentDidMount() {
    const { carregarPost, carregarComentarios, match } = this.props;
    const { post_id } = match.params;
    carregarPost(post_id);
    carregarComentarios(post_id);
  }

  componentWillReceiveProps({ post, history }) {
    if (!post.id) {
      history.push("/page/notfound/404");
    }
  }

  onRemoveSuccess = () => {
    this.props.mostrarSnack("Post removido com sucesso");
    this.props.history.push("/");
  };

  commentEditClick = comment => {
    this.setState({ comment });
  };

  render() {
    const { post, comments, removerPost } = this.props;
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
          isDetalhes={true}
          removerMethod={removerPost}
          onRemoveSuccess={this.onRemoveSuccess}
        />
        <RegisterComment idPost={post.id} comment={this.state.comment} />
        <ListComments
          comments={comments}
          onEditClick={comment => this.commentEditClick(comment)}
        />
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
  carregarComentarios: idPost => dispatch(getComments(idPost)),
  removerPost: (idPost, successCallback) =>
    dispatch(deletePostById(idPost, successCallback)),
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(MapStateToProps, MapDispatchToProps)(PostDetails);
