import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import commandReducer from './commandReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  template: () => ({ data: 'wow' }),
  command: commandReducer,
  chat: chatReducer,
  form: formReducer,
});
