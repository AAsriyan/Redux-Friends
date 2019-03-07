import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FAILURE = "ADD_FAILURE";
export const DELETE_FRIEND = "DELETE_FRIEND";
export const UPDATE_FRIEND = "UPDATE_FRIEND";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    console.log(res.data);
    localStorage.setItem("token", res.data.payload);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.payload
    });
    getFriends();
  });
};

export const getFriends = () => dispatch => {
  axiosWithAuth()
    .get("http://localhost:5000/api/friends")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err.response });
    });
};

export const addFriend = newFriend => dispatch => {
  axiosWithAuth()
    .post("http://localhost:5000/api/friends", newFriend)
    .then(res => {
      console.log(res.data);
      dispatch({ type: ADD_FRIEND, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FAILURE, payload: err.response });
    });
};
