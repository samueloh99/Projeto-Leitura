import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "typeface-roboto";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import Snackbar from "@material-ui/core/Snackbar";
import { withRouter } from "react-router-dom";
import { hideSnack } from "./actions/snack";

class App extends Component {
  state = {
    open: false
  };

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
    const { message } = this.props;
    const { open } = this.state;
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>Projeto Leitura</Toolbar>
        </AppBar>
        <div className="app-content">
          <Switch>
            <Route exact path="/:category/:post_id" component={PostDetails} />
            <Route exact path="/" component={Posts} />
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
    message: state.snack.message
  };
};

const MapDispatchToProps = dispatch => ({
  hideSnackbar: () => dispatch(hideSnack())
});

export default withRouter(connect(MapStateToProps, MapDispatchToProps)(App));
