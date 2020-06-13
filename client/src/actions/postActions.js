import axios from 'axios';

import {
  ADD_POST,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
  SET_CURRENT_USER,
} from './types';

// get all posts
export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

// Get Post
export const getPost = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POST,
        payload: null,
      })
    );
};

// Add Post
export const addPost = (postData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post('/api/posts', postData)
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/api/posts/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Delete account & profile
export const deleteAccount = () => (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    axios
      .delete('/api/profile')
      .then((res) =>
        dispatch({
          type: SET_CURRENT_USER,
          payload: {},
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  }
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
