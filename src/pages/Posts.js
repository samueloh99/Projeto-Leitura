import React, { Component } from "react";
import * as API from "../services/Api";
import { connect } from "react-redux";
import { getPosts, getCategories } from "../actions";

import Post from "../components/Post";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

class Posts extends Component {
  state = {
    open: false,
    titulo: "",
    corpo: "",
    autor: "",
    showSnack: false,
    snackMessage: "",
    categoriaSelecionada: ""
  };

  componentDidMount() {
    this.props.carregarPosts();
    this.props.carregarCategorias();
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
    else {
      API.savePost({
        title: this.state.titulo,
        timestamp: Date.now(),
        body: this.state.corpo,
        author: this.state.autor
      });
    }
  };

  render() {
    const { posts, categories } = this.props;
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
        {posts.length &&
          posts.map(post => (
            <Post
              key={post.id}
              titulo={post.title}
              autor={post.author}
              totalPontos={post.voteScore}
              totalComentarios={post.commentCount}
            />
          ))}

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
                onChange={this.onChangeInput("titulo")}
              />
              <TextField
                fullWidth
                required
                label="Corpo"
                onChange={this.onChangeInput("corpo")}
              />
              <TextField
                fullWidth
                required
                label="Autor"
                onChange={this.onChangeInput("autor")}
              />

              <FormControl style={{ minWidth: "100%" }}>
                <InputLabel shrink htmlFor="categoria">
                  Age
                </InputLabel>
                <NativeSelect
                  input={<Input name="categoria" id="categoria" />}
                  value={this.state.categoriaSelecionada}
                  onChange={this.onChangeInput("categoriaSelecionada")}
                >
                  <option value="" selected>
                    <em>Selecione uma categoria</em>
                  </option>

                  {categories &&
                    categories.map(categoria => {
                      return (
                        <option key={categoria.name} value={categoria.name}>
                          {categoria.name}
                        </option>
                      );
                    })}
                </NativeSelect>
              </FormControl>
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

const MapStateToProps = state => {
  return {
    posts: state.posts,
    categories: state.categories
  };
};

const MapDispatchToProps = dispatch => ({
  carregarPosts: () => dispatch(getPosts()),
  carregarCategorias: () => dispatch(getCategories())
});

export default connect(MapStateToProps, MapDispatchToProps)(Posts);
