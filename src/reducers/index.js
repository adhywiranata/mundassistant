import { combineReducers } from 'redux';

import commandReducer from './commandReducer';

export default combineReducers({
  template: () => ({ data: 'wow' }),
  command: commandReducer,
});
