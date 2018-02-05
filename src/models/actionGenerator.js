import handleActionError from './errorHandler';

export default function actionGenerator(startActionType, successActionType, errorActionType, serviceFuc, url, param,
  callback, extraStartData, extraSuccessData, errorData, payloadProcessor) {
  return (dispatch) => {
    if (startActionType) {
      dispatch({ type: startActionType, ...extraStartData });
    }
    return serviceFuc(url, param)
    .then(payload => {
      const data = typeof payloadProcessor === 'function' ? payloadProcessor(payload) : payload;
      if (successActionType) {
        dispatch({
          type: successActionType,
          ...extraSuccessData,
          data: data
        });
      }
      if (callback) {
        callback(true, data);
      }
    })
    .catch(payload => {
      handleActionError(dispatch, payload.error || payload, errorActionType, errorData);
      if (callback) {
        callback(false);
      }
    });
  };
}
