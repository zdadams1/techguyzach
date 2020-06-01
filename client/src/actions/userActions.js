import axios from 'axios';

import { GET_ERRORS, SEND_MESSAGE, CLEAR_ERRORS } from './types';

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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
