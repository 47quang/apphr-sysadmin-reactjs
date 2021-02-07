import { combineReducers } from 'redux';
import styleReducer from './style';
import userReducer from './user';

export default combineReducers({
  style: styleReducer,
  user: userReducer,
});
