import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { saveComment } from "../actions/comments";
import { showSnack } from "../actions/snack";

class RegisterComment extends Component {
  state = {
    autor: "",
    mensagem: ""
  };

  onChangeInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  clear = () => {
    this.setState({
      autor: "",
      mensagem: ""
    });
  };

  save = () => {
    const { autor, mensagem } = this.state;
    const { idPost, sendComment, mostrarSnack } = this.props;
    if (!autor || !mensagem) {
      mostrarSnack("Preencha todos os campos!");
      return false;
    }
    const comment = {
      timestamp: new Date(),
      body: mensagem,
      author: autor,
      parentId: idPost
    };
    sendComment(comment, this.onSaveSuccess);
  };

  onSaveSuccess = () => {
    this.props.mostrarSnack("Comentário enviado com sucesso!");
    this.clear();
  };

  render() {
    return (
      <div>
        <Card className="container-comment-card">
          <h4>Escreva um comentário :)</h4>

          <TextField
            label="Autor"
            fullWidth
            value={this.state.autor}
            onChange={this.onChangeInput("autor")}
            margin="normal"
          />

          <TextField
            label="Mensagem"
            fullWidth
            value={this.state.mensagem}
            onChange={this.onChangeInput("mensagem")}
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
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(null, MapDispatchToProps)(RegisterComment);
