import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import PropTypes from "prop-types";
import Rate from "./Rate";
import { connect } from "react-redux";
import { saveVote } from "../actions/posts";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";

const removeHandler = (id, removerMethod, onRemoveSuccess) => {
  if (removerMethod && typeof removerMethod === "function") {
    removerMethod(id, onRemoveSuccess);
  }
};

const Post = props => {
  const {
    id,
    titulo,
    autor,
    corpo,
    totalPontos,
    totalComentarios,
    sendVote,
    categoria,
    isDetalhes,
    removerMethod,
    onRemoveSuccess
  } = props;
  return (
    <Card className="post-card">
      <CardContent>
        <h2 className="post-title">
          {titulo}
          <span className="flex-item" />
          {isDetalhes && (
            <Button
              onClick={() => removeHandler(id, removerMethod, onRemoveSuccess)}
              color="secondary"
            >
              remover
            </Button>
          )}
        </h2>
        <div className="post-author">{autor}</div>
        {categoria && (
          <Link className="link-default" to={`/${categoria}`}>
            <Chip label={categoria} />
          </Link>
        )}
        {corpo && <div className="container-body-post">{corpo}</div>}
        <div className="info-post">
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
        {!isDetalhes && (
          <Link className="link-default" to={`${categoria}/${id}`}>
            <Button color="primary">Detalhes</Button>
          </Link>
        )}
        <span style={{ flex: 1 }} />
        <Rate
          clickMethod={type => {
            sendVote(id, type);
          }}
        />
      </CardActions>
    </Card>
  );
};

Post.propTypes = {
  id: PropTypes.string,
  titulo: PropTypes.string,
  autor: PropTypes.string,
  totalPontos: PropTypes.number,
  totalComentarios: PropTypes.number,
  categoria: PropTypes.string,
  isDetalhes: PropTypes.bool,
  removerMethod: PropTypes.func
};

const MapDispatchToProps = dispatch => ({
  sendVote: (id, type) => dispatch(saveVote(id, type))
});

export default connect(null, MapDispatchToProps)(Post);
