import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Rate from "./Rate";
import { connect } from "react-redux";
import { saveVote, deleteCommentById } from "../actions/comments";
import { showSnack } from "../actions/snack";
import Button from "@material-ui/core/Button";

class Comment extends Component {
  onRemoveSuccess = () => {
    this.props.mostrarSnack("Comentário removido com sucesso");
  };

  render() {
    const {
      id,
      autor,
      comentario,
      pontos,
      sendVote,
      removeComment
    } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <h2 className="comment-title">
              {autor}
              <span className="flex-item" />
              <Button
                onClick={() => {
                  removeComment(id, this.onRemoveSuccess);
                }}
                color="secondary"
              >
                remover
              </Button>
            </h2>

            <p>{comentario}</p>
            <p>{pontos}</p>
          </CardContent>
          <Rate
            clickMethod={type => {
              sendVote(id, type);
            }}
          />
        </Card>
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => ({
  sendVote: (id, type) => dispatch(saveVote(id, type)),
  removeComment: (id, successCallback) =>
    dispatch(deleteCommentById(id, successCallback)),
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(null, MapDispatchToProps)(Comment);
