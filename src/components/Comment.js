import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Comment extends Component {
  render() {
    const { autor, comentario } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <h2>{autor}</h2>
            <p>{comentario}</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default Comment;
