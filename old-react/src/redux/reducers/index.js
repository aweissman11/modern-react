import { combineReducers } from 'redux';

import todosReducer from './reducers';

export const rootReducer = combineReducers({
  todosReducer,
});
