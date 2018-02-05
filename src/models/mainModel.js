import uris from '../utils/uris';
import { get } from '../utils/service';
import keyMirror from '../utils/keyMirror';
import actionGenerator from './actionGenerator';
import { SHOW_ERROR, HIDE_ERROR } from './actionTypes';

const Type = keyMirror({
  GET_DATA_LIST: null,
  SET_DATA_LIST: null,
  GET_DATA_LIST_ERROR: null
});

const initialState = {
  isFetching: false,
  dataList: [],
  error: null
};

export default {
  namespace: 'main',

  state: initialState,

  selectors: {
    getMainData(state) {
      return state.get('main') ? state.get('main')
        .toJSON() : {};
    }
  },

  actions: {
    getDataList(key, callback) {
      return actionGenerator(Type.GET_DATA_LIST, Type.SET_DATA_LIST, Type.GET_DATA_LIST_ERROR, get, uris.getDataList(key), null, callback);
    },
    hideError() {
      return {
        type: HIDE_ERROR
      };
    }
  },

  reducers: {
    [Type.GET_DATA_LIST]: (state) => state.merge({
      isFetching: true
    }),
    [Type.SET_DATA_LIST]: (state, action) => state.merge({
      isFetching: false,
      dataList: action.data
    }),
    [Type.GET_DATA_LIST_ERROR]: (state) => state.merge({
      isFetching: false,
      dataList: []
    }),
    [SHOW_ERROR]: (state, action) => state.merge({
      error: action.payload
    }),
    [HIDE_ERROR]: state => state.merge({
      error: null
    })
  }
};
