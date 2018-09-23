import { SHOW_SNACK } from "../actions/snack";

const initialState = {
  showSnack: false,
  message: null
};
export default function snack(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACK:
      const { showSnack, message } = action;
      return {
        showSnack,
        message
      };
    default:
      return state;
  }
}
