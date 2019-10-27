import { FETCH_USER_SUCCESS, FETCH_JOURNAL_SUCCESS } from "../actions/types";

const initialState = { users: [], journals: [] };

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: action.payload
      };
    default:
      return state;
  }
}
