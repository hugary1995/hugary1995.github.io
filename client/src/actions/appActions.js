import axios from "axios";
import {
  GET_ERRORS,
  FETCH_USER_SUCCESS,
  FETCH_JOURNAL_SUCCESS,
  ADD_JOURNAL_SUCCESS
} from "./types";

// API route depend on build mode
const apiUrl =
  process.env.NODE_ENV === "production"
    ? "http://18.224.70.200:5000"
    : "http://localhost:5000";

// Get all users
const getUsers = () => dispatch => {
  axios
    .get(apiUrl + "/api/users/all")
    .then(res => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all journals
const getJournals = () => dispatch => {
  axios
    .get(apiUrl + "/api/journals/all")
    .then(res => {
      dispatch({
        type: FETCH_JOURNAL_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add journal
export const addJournal = (uid, journalData) => dispatch => {
  axios
    .post(apiUrl + "/api/journals/add/" + uid, journalData)
    .then(res => dispatch({ type: ADD_JOURNAL_SUCCESS, payload: res }))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete journal
export const deleteJournal = jid => dispatch => {
  axios
    .post(apiUrl + "/api/journals/delete/" + jid)
    .then(res => {
      dispatch(getJournals());
      dispatch(getUsers());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// User votes for a journal
export const vote = (uid, jid) => dispatch => {
  axios
    .post(apiUrl + "/api/journals/vote/" + uid + "/" + jid)
    .then(res => {
      dispatch(getJournals());
      dispatch(getUsers());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// User unvotes for a journal
export const unvote = (uid, jid) => dispatch => {
  axios
    .post(apiUrl + "/api/journals/unvote/" + uid + "/" + jid)
    .then(res => {
      dispatch(getJournals());
      dispatch(getUsers());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export { getUsers, getJournals };
