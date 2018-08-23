import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "typeface-roboto";
import Post from "./components/Post";
// import * as Api from "./services/Api";

class App extends Component {
  componentDidMount() {
    // const posts = Api.getAllPosts();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Post />
        </p>
      </div>
    );
  }
}

export default App;
