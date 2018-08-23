import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const Post = props => {
  return (
    <Card>
      <CardContent>
        <h2>Título Post</h2>
        <p>Vinícius Aragão</p>
        <Icon>comment</Icon>
        <div>82</div>
        <h3>18 pontos</h3>
      </CardContent>
      <CardActions>
        <Button>Detalhes</Button>
      </CardActions>
    </Card>
  );
};

export default Post;
