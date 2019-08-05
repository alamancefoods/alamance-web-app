import { combineReducers } from 'redux';
import { roleReducer } from '../roles/reducers'
import { serviceReducer } from '../services/reducers'

export default combineReducers({
  roleReducer,
  serviceReducer
});
