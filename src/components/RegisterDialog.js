import React, { Component } from "react";
import { connect } from "react-redux";
import { persistPost } from "../actions/posts";
import { showSnack } from "../actions/snack";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

class RegisterDialog extends Component {
  state = {
    open: false,
    id: "",
    titulo: "",
    corpo: "",
    autor: "",
    showSnack: false,
    snackMessage: "",
    categoriaSelecionada: ""
  };

  componentWillReceiveProps({ isEdit, post }) {
    if (isEdit) {
      this.setState({
        id: post.id,
        titulo: post.title,
        corpo: post.body,
        autor: post.author,
        categoriaSelecionada: post.category
      });
    }
  }

  openDialog = () => {
    this.setState({ open: true });
  };

  closeDialog = () => {
    this.setState({ open: false });
  };

  onChangeInput = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  onSaveSuccess = () => {
    const successfulMessage = this.props.isEdit
      ? "Post atualizado com sucesso"
      : "Post adicionado com sucesso";
    this.props.mostrarSnack(successfulMessage);
    this.closeDialog();
  };

  onConfirmDialog = () => {
    if (
      !this.state.titulo ||
      !this.state.corpo ||
      !this.state.autor ||
      !this.state.categoriaSelecionada
    )
      this.props.mostrarSnack("Preencha todos os campos.");
    else {
      const { savePost, isEdit } = this.props;
      let post = {
        title: this.state.titulo,
        timestamp: Date.now(),
        body: this.state.corpo,
        author: this.state.autor,
        category: this.state.categoriaSelecionada
      };
      if (isEdit) post.id = this.state.id;

      savePost(post, this.onSaveSuccess, isEdit);
    }
  };

  render() {
    const { titulo, corpo, autor } = this.state;
    const { categories, isEdit } = this.props;
    return (
      <div>
        <Button
          className="button-add-post"
          onClick={this.openDialog}
          variant="contained"
          color="secondary"
        >
          <Icon>{isEdit ? "edit" : "add"}</Icon>
          {isEdit ? "Editar Post" : "Novo Post"}
        </Button>
        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {isEdit ? "Atualizar Post" : "Adicionar Post"}
          </DialogTitle>
          <DialogContent>
            Preencha as informações abaixo para{" "}
            {isEdit ? "atualizar o" : "cadastrar um novo"} post.
            <TextField
              fullWidth
              required
              value={titulo}
              label="Título"
              onChange={this.onChangeInput("titulo")}
            />
            <TextField
              fullWidth
              value={corpo}
              required
              label="Corpo"
              onChange={this.onChangeInput("corpo")}
            />
            {!isEdit && (
              <TextField
                fullWidth
                value={autor}
                required
                label="Autor"
                onChange={this.onChangeInput("autor")}
              />
            )}
            {!isEdit && (
              <FormControl style={{ minWidth: "100%" }}>
                <InputLabel shrink htmlFor="categoria">
                  Age
                </InputLabel>
                <NativeSelect
                  input={<Input name="categoria" id="categoria" />}
                  value={this.state.categoriaSelecionada}
                  onChange={this.onChangeInput("categoriaSelecionada")}
                >
                  <option value="">Selecione uma categoria</option>

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
            )}
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
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const MapDispatchToProps = dispatch => ({
  savePost: (post, successCallback, isEdit) =>
    dispatch(persistPost(post, successCallback, isEdit)),
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(MapStateToProps, MapDispatchToProps)(RegisterDialog);
