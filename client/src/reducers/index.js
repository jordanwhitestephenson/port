import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReducer from './postReducer';
import projectReducer from './projectReducer'

export default combineReducers({
  auth: authReducer,
  errors_object: errorReducer,
  profile: profileReducer,
  post: postReducer,
  project: projectReducer
});
