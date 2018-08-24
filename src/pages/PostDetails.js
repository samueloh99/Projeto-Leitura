import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Comment from "../components/Comment";

class PostDetails extends Component {
  render() {
    const { titulo, corpo, autor } = this.props;
    return (
      <div>
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

export default PostDetails;
