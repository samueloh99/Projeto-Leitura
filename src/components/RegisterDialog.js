import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategories } from "../actions/categories";
import { insertPost } from "../actions/posts";
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
    titulo: "",
    corpo: "",
    autor: "",
    showSnack: false,
    snackMessage: "",
    categoriaSelecionada: ""
  };

  componentDidMount() {
    this.props.carregarCategorias();
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
    this.props.mostrarSnack("Post adicionado com sucesso");
    this.closeDialog();
  };

  onConfirmDialog = () => {
    if (!this.state.titulo || !this.state.corpo || !this.state.autor)
      this.openSnack("Preencha todos os campos.");
    else {
      const { addPost } = this.props;

      addPost(
        {
          title: this.state.titulo,
          timestamp: Date.now(),
          body: this.state.corpo,
          author: this.state.autor,
          category: this.state.categoriaSelecionada
        },
        this.onSaveSuccess
      );
    }
  };

  render() {
    const { categories } = this.props;
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
        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">Adicionar Post</DialogTitle>
          <DialogContent>
            Preencha as informações abaixo para cadastrar um novo post.
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
  carregarCategorias: () => dispatch(getCategories()),
  addPost: (post, successCallback) =>
    dispatch(insertPost(post, successCallback)),
  mostrarSnack: message => dispatch(showSnack(message))
});

export default connect(MapStateToProps, MapDispatchToProps)(RegisterDialog);
