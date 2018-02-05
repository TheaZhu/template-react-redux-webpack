import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './models';

const loggerMiddleware = createLogger({
  stateTransformer: state => state.toJSON()
});

const createStoreWithMiddleware = process.env.NODE_ENV !== 'production'
  ? applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore)
  : applyMiddleware(thunkMiddleware)(createStore);

const reducer = combineReducers(reducers);

function createAppStore() {
  const state = Immutable.fromJS({});
  const store = reducer(state);
  return createStoreWithMiddleware(reducer, store);
}

const sharedStore = createAppStore();

export default sharedStore;
