import { SHOW_ERROR } from './actionTypes';

export default function handleActionError(dispatch, error, source, data) {
  console.error('@@@@ handleActionError ' + source + ' :', error);
  const errorJson = {
    msg: ''
  };
  if (error) {
    if (typeof error === 'string') {
      errorJson.msg = error;
    } else if (error.timeout) {
      errorJson.msg = 'Request timeout';
    } else if (error instanceof Error) {
      if (error.response && error.response.text) {
        errorJson.msg = error.response.text;
      }
    } else if (error.message) {
      errorJson.msg = error.message;
    }
    if (source) {
      dispatch({
        type: source,
        ...data
      });
    }
    return dispatch({
      type: SHOW_ERROR,
      source,
      payload: errorJson
    });
  }
}
