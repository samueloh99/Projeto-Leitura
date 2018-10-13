import React, { Component } from "react";
import Comment from "./Comment";

class ListComments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div>
        <h4>Comentários</h4>
        {comments &&
          comments.map(comment => {
            return (
              <Comment
                id={comment.id}
                autor={comment.author}
                comentario={comment.body}
                pontos={comment.voteScore}
              />
            );
          })}
        {!comments.length && <p>Não há comentários</p>}
      </div>
    );
  }
}

export default ListComments;
