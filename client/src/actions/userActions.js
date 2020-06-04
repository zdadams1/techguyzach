import axios from 'axios';

import {
  GET_ERRORS,
  SEND_MESSAGE,
  CLEAR_ERRORS,
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
} from './types';

const sendMessage = (messageData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post('/api/message', messageData)
    .then((res) =>
      dispatch({
        type: SEND_MESSAGE,
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

export default sendMessage;

// Clear USER
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
