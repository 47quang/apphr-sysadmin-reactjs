import { combineReducers } from 'redux';
import styleReducers from './reducers';

export default combineReducers({
  style: styleReducers,
});
