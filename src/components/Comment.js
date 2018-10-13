import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Rate from "./Rate";
import { connect } from "react-redux";
import { saveVote } from "../actions/comments";

class Comment extends Component {
  render() {
    const { id, autor, comentario, pontos, sendVote } = this.props;
    return (
      <div>
        <Card>
          <CardContent>
            <h2>{autor}</h2>
            <p>{comentario}</p>
            <p>{pontos}</p>
          </CardContent>
          <Rate
            clickMethod={type => {
              sendVote(id, type);
            }}
          />
        </Card>
      </div>
    );
  }
}

const MapDispatchToProps = dispatch => ({
  sendVote: (id, type) => dispatch(saveVote(id, type))
});

export default connect(null, MapDispatchToProps)(Comment);
