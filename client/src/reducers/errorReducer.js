import { GET_ERRORS, ADD_JOURNAL_SUCCESS } from "../actions/types";
const initialState = { success: false };
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case ADD_JOURNAL_SUCCESS:
      return {
        ...state,
        success: true
      };
    default:
      return state;
  }
}
