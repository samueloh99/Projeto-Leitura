import { SHOW_SNACK, HIDE_SNACK } from "../actions/snack";

const initialState = {
  showSnack: false,
  message: null
};
export default function snack(state = initialState, action) {
  const { showSnack, message } = action;
  switch (action.type) {
    case SHOW_SNACK:
      return {
        showSnack,
        message
      };
    case HIDE_SNACK:
      return {
        showSnack,
        message
      };
    default:
      return state;
  }
}
