export const SHOW_SNACK = "SHOW_SNACK";
export const HIDE_SNACK = "HIDE_SNACK";

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
