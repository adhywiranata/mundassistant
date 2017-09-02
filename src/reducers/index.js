import { combineReducers } from 'redux';

import commandReducer from './commandReducer';
import chatReducer from './chatReducer';

export default combineReducers({
  template: () => ({ data: 'wow' }),
  command: commandReducer,
  chat: chatReducer,
});
