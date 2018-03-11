import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

const reducers = {
  data: reducer
};

const store = createStore(combineReducers(reducers), {}, applyMiddleware(ReduxThunk));

export default store;
