import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";

const Post = props => {
  const { titulo, autor, totalPontos, totalComentarios } = props;
  return (
    <Card>
      <CardContent>
        <h2>{titulo}</h2>
        <p>{autor}</p>
        <Icon>comment</Icon>
        <div>{totalComentarios}</div>
        <h3>{totalPontos}</h3>
      </CardContent>
      <CardActions>
        <Button>Detalhes</Button>
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
