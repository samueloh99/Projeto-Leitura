import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Comment from "../components/Comment";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class PostDetails extends Component {
  render() {
    const { titulo, corpo, autor } = this.props;
    return (
      <div>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
        <Card>
          <h3>{titulo}</h3>
          <h5>{autor}</h5>
          <p>{corpo}</p>
          <Comment />
        </Card>
      </div>
    );
  }
}

export default withRouter(PostDetails);
