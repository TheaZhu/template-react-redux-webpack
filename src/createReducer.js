import * as reducer from 'redux-immutablejs';
import { SHOW_ERROR, REQUEST_CLEAN_STORE, REQUEST_SET_VIA_PATH_ } from './models/actionTypes';

/**
 * 创建State的处理函数
 * @param  {Object} initialState 初始状态
 * @param  {Object} handlers     处理函数
 * @param  {String} reducerName  对应index.js中的reducer名字
 * @return {Function}              reduce函数
 */
export default function createReducer(initialState, handlers, reducerName) {
  const extraHandlers = {
    [REQUEST_CLEAN_STORE]: state =>
       state.merge(initialState.toJSON())
  };
  // 统一的错误处理,消除isFetching
  if (!handlers[SHOW_ERROR]) {
    extraHandlers[SHOW_ERROR] = (state) => {
      if (state.get('isFetching')) {
        return state.merge({
          isFetching: false
        });
      }
      return state;
    };
  }
  const returnReducer = reducer.createReducer(initialState,
    Object.assign({ }, handlers, extraHandlers));
  returnReducer.reducerName = reducerName;
  return returnReducer;
}
