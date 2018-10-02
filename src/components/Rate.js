import React from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const Rate = props => {
  const { clickMethod } = props;
  return (
    <div className="info-post">
      <IconButton
        onClick={() => clickMethod("upVote")}
        className="button-rate"
        mini="true"
        color="primary"
        variant="fab"
      >
        <Icon>thumb_up</Icon>
      </IconButton>
      <IconButton
        onClick={() => clickMethod("downVote")}
        className="button-rate"
        mini="true"
        color="secondary"
        variant="fab"
      >
        <Icon>thumb_down</Icon>
      </IconButton>
    </div>
  );
};

export default Rate;
