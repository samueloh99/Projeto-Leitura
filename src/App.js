import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "typeface-roboto";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>Projeto Leitura</Toolbar>
        </AppBar>
        <div className="app-content">
          <Route exact path="/" component={Posts} />
          <Route exact path="/details" component={PostDetails} />
        </div>
      </div>
    );
  }
}

export default App;
