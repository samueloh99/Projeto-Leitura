import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { saveComment, editComment } from "../actions/comments";
import { showSnack } from "../actions/snack";

class RegisterComment extends Component {
  state = {
    author: "",
    body: "",
    idToEdit: ""
  };

  componentWillReceiveProps = props => {
    const { comment } = props;
    const { id, author, body } = comment;
    this.setState({
      idToEdit: id,
      author: author || "",
      body: body || ""
    });
  };

  onChangeInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  clear = () => {
    this.setState({
      author: "",
      body: "",
      idToEdit: ""
    });
  };

  save = () => {
    const { idToEdit, author, body } = this.state;
    const { idPost, sendComment, updateComment, mostrarSnack } = this.props;
    if (!author || !body) {
      mostrarSnack("Preencha todos os campos!");
      return false;
    }

    const comment = {
      timestamp: new Date(),
      body,
      author,
      parentId: idPost
    };

    if (idToEdit) {
      comment.id = idToEdit;
      updateComment(comment, this.onSaveSuccess);
    } else {
      sendComment(comment, this.onSaveSuccess);
    }
  };

  onSaveSuccess = () => {
    this.props.mostrarSnack("Comentário salvo com sucesso!");
    this.clear();
  };

  render() {
    const { author, body, idToEdit } = this.state;
    return (
      <div>
        <Card className="container-comment-card">
          <h4>
            {idToEdit ? (
              `Editando comentário de ${author}`
            ) : (
              "Escreva um comentário :)"
            )}
          </h4>

          {!idToEdit && (
            <TextField
              label="Autor"
              fullWidth
              value={author}
              onChange={this.onChangeInput("author")}
              margin="normal"
            />
          )}

          <TextField
            label="Comentário"
            fullWidth
            value={body}
            onChange={this.onChangeInput("body")}
            margin="normal"
          />

          <Button onClick={() => this.clear()}>Limpar</Button>

          <Button
            onClick={() => this.save()}
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </Card>
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => ({
  sendComment: (comment, successCallback) =>
    dispatch(saveComment(comment, successCallback)),
  updateComment: (comment, successCallback) => {
    dispatch(editComment(comment, successCallback));
  },
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(null, MapDispatchToProps)(RegisterComment);
