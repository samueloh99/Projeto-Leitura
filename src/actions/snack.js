export const SHOW_SNACK = "SHOW_SNACK";

export const showSnack = message => {
  return {
    type: SHOW_SNACK,
    showSnack: true,
    message
  };
};
