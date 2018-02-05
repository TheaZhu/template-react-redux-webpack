import Immutable from 'immutable';
import createReducer from '../createReducer';

const rootReducer = {};

/**
 * 将reducer合并到rootReducer中, reducer的名字需要在createReducer中指定
 * @param  {Function} reducer 状态变迁函数
 * @return {Object} rootReducer
 */
function combine(reducer) {
  if (reducer.reducerName) {
    rootReducer[reducer.reducerName] = reducer;
  }
}

const context = require.context('./', false, /(Model|model)\.js$/);
const keys = context.keys();
const models = [];
for (let i = 0; i < keys.length; i++) {
  models.push(context(keys[i]));
}
models.forEach(model => combine(createReducer(Immutable.fromJS(model.state), model.reducers, model.namespace)));

export default rootReducer;
