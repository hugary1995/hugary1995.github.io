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
    ? "https://hugary.dev:5000"
    : "http://localhost:5000";

const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false
});

// Get all users
const getUsers = () => dispatch => {
  axios({
    method: "get",
    baseURL: apiUrl,
    url: "/api/users/all",
    httpsAgent: agent
  })
    .then(res => {
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

// Get all journals
const getJournals = () => dispatch => {
  axios({
    method: "get",
    baseURL: apiUrl,
    url: "/api/journals/all",
    httpsAgent: agent
  })
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
  axios({
    method: "post",
    baseURL: apiUrl,
    url: "/api/journals/add/" + uid,
    httpsAgent: agent,
    data: journalData
  })
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
  axios({
    method: "post",
    baseURL: apiUrl,
    url: "/api/journals/delete/" + jid,
    httpsAgent: agent
  })
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
  axios({
    method: "post",
    baseURL: apiUrl,
    url: "/api/journals/vote/" + uid + "/" + jid,
    httpsAgent: agent
  })
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
  axios({
    method: "post",
    baseURL: apiUrl,
    url: "/api/journals/unvote/" + uid + "/" + jid,
    httpsAgent: agent
  })
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
