import React, { Component } from "react";
import Post from "../components/Post";
// import * as Api from "./services/Api";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";

class Posts extends Component {
  state = {
    open: false,
    titulo: "",
    corpo: "",
    autor: "",
    showSnack: false,
    snackMessage: ""
  };

  componentDidMount() {
    // const posts = Api.getAllPosts();
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  openSnack = snackMessage => {
    this.setState({ showSnack: true, snackMessage });
  };

  closeSnack = () => {
    this.setState({ showSnack: false });
  };

  onChangeInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onConfirmDialog = () => {
    if (!this.state.titulo || !this.state.corpo || !this.state.autor)
      this.openSnack("Preencha todos os campos.");
  };

  render() {
    return (
      <div>
        <Button
          className="button-add-post"
          onClick={this.openDialog}
          variant="contained"
          color="secondary"
        >
          <Icon>add</Icon>
          Novo Post
        </Button>
        <Post
          titulo="consumindo api da marvel com vue js"
          autor="Vinícius Aragão"
          totalPontos="51"
          totalComentarios="12"
        />
        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Adicionar Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p>Preencha as informações abaixo para cadastrar um novo post.</p>

              <TextField
                fullWidth
                required
                label="Título"
                onChange={this.onChangeInput}
              />
              <TextField
                fullWidth
                required
                label="Corpo"
                onChange={this.onChangeInput}
              />
              <TextField
                fullWidth
                required
                label="Autor"
                onChange={this.onChangeInput}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Cancelar
            </Button>
            <Button
              onClick={this.onConfirmDialog}
              color="secondary"
              variant="contained"
              autoFocus
            >
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={this.state.showSnack}
          onClose={this.closeSnack}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{this.state.snackMessage}</span>}
        />
      </div>
    );
  }
}

export default Posts;
