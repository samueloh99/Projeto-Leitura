import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "typeface-roboto";
import Posts from "./pages/Posts";
import Categories from "./pages/Categories";
import PostDetails from "./pages/PostDetails";
import Page404 from "./pages/Page404";
import Snackbar from "@material-ui/core/Snackbar";
import { withRouter } from "react-router-dom";
import { hideSnack } from "./actions/snack";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { getCategories } from "./actions/categories";

class App extends Component {
  state = {
    open: false
  };

  componentDidMount() {
    this.props.carregarCategorias();
  }

  handleClose = () => {
    this.setState(
      {
        open: false
      },
      () => {
        this.props.hideSnackbar();
      }
    );
  };

  componentWillReceiveProps({ showSnack }) {
    this.setState({ open: showSnack });
  }

  render() {
    const { message, categories } = this.props;
    const { open } = this.state;
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            Projeto Leitura
            <span style={{ flex: 1 }} />
            {categories &&
              categories.map(category => {
                return (
                  <Link className="link-default" to={`/${category.path}`}>
                    <Button className="button-white">{category.name}</Button>
                  </Link>
                );
              })}
          </Toolbar>
        </AppBar>
        <div className="app-content">
          <Switch>
            <Route exact path="/:category/:post_id" component={PostDetails} />
            <Route exact path="/:category" component={Categories} />
            <Route exact path="/" component={Posts} />
            <Route component={Page404} />
          </Switch>
        </div>
        <Snackbar
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">{message}</span>}
        />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    showSnack: state.snack.showSnack,
    message: state.snack.message,
    categories: state.categories
  };
};

const MapDispatchToProps = dispatch => ({
  hideSnackbar: () => dispatch(hideSnack()),
  carregarCategorias: () => dispatch(getCategories())
});

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(App));
