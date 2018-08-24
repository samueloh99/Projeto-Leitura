import React, { Component } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

class Rate extends Component {
  render() {
    return (
      <div className="info-post">
        <IconButton className="button-rate" mini color="primary" variant="fab">
          <Icon>thumb_up</Icon>
        </IconButton>
        <h5>12</h5>
        <IconButton
          className="button-rate"
          mini
          color="secondary"
          variant="fab"
        >
          <Icon>thumb_down</Icon>
        </IconButton>
        <h5>1</h5>
      </div>
    );
  }
}

export default Rate;
