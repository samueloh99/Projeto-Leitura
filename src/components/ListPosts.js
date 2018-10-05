import React, { Component } from "react";
import Post from "./Post";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class ListPosts extends Component {
  state = {
    posts: [],
    descending: true,
    sortField: "voteScore"
  };

  componentWillReceiveProps(nextProps) {
    const { posts } = nextProps || [];
    this.setState({ posts }, () => {
      this.sortPosts();
    });
  }

  changeSort = e => {
    const sortField = e.target.value;
    this.setState({ sortField }, () => {
      this.sortPosts();
    });
  };

  sortPosts = () => {
    const { posts, sortField, descending } = this.state;
    if (posts && posts.length) {
      posts.sort((postA, postB) => {
        if (descending) return postB[sortField] - postA[sortField];
        return postA[sortField] - postB[sortField];
      });
      this.setState({ posts });
    }
  };

  sortList = () => {
    this.setState(
      {
        descending: !this.state.descending
      },
      () => {
        this.sortPosts();
      }
    );
  };

  render() {
    const { posts, descending } = this.state;
    return (
      <div>
        <form autoComplete="off">
          <FormControl className="select-input">
            <InputLabel htmlFor="tipo-order">Ordenar por:</InputLabel>
            <Select
              value={this.state.sortField}
              onChange={this.changeSort}
              inputProps={{
                name: "order",
                id: "tipo-order"
              }}
            >
              <MenuItem value="voteScore">Pontuação</MenuItem>
              <MenuItem value="timestamp">Data de criação</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Button className="sort-posts" onClick={() => this.sortList()}>
          Crescente / Decrescente
          <Icon>{descending ? "arrow_downward" : "arrow_upward"}</Icon>
        </Button>
        {posts &&
          posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              titulo={post.title}
              autor={post.author}
              totalPontos={post.voteScore}
              totalComentarios={post.commentCount}
              categoria={post.category}
            />
          ))}
      </div>
    );
  }
}

export default ListPosts;
