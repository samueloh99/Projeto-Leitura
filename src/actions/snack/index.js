import { SHOW_SNACK, HIDE_SNACK } from "./actionTypes";

export const showSnack = message => {
  return {
    type: SHOW_SNACK,
    showSnack: true,
    message
  };
};

export const hideSnack = () => {
  return {
    type: HIDE_SNACK,
    showSnack: false,
    message: ""
  };
};
