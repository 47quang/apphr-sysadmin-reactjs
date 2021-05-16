import { combineReducers } from 'redux';
import styleReducer from './style';
import userReducer from './user';
import merchantReduce from './merchant';
import provinceReduce from './province';

export default combineReducers({
  style: styleReducer,
  user: userReducer,
  merchant: merchantReduce,
  province: provinceReduce,
});
