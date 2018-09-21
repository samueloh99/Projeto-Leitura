import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import Rate from "./Rate";

const Post = props => {
  const { titulo, autor, totalPontos, totalComentarios } = props;
  return (
    <Card className="post-card">
      <CardContent>
        <h2 className="post-title">{titulo}</h2>
        <p className="post-author">{autor}</p>

        <div class="info-post">
          <div>
            <Icon>comment</Icon>
            <div>{totalComentarios}</div>
          </div>

          <div>
            <h3 className="total-points">{totalPontos}</h3>
          </div>
        </div>
      </CardContent>
      <CardActions className="info-post">
        <Button color="primary">Detalhes</Button>
        <span style={{ flex: 1 }} />
        <Rate />
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  titulo: PropTypes.string,
  autor: PropTypes.string,
  totalPontos: PropTypes.number,
  totalComentarios: PropTypes.number
};

export default Post;
