import { all } from 'redux-saga/effects';

import { watchFetchChats, watchAddChatMessage } from './chatSaga';

export default function* rootSaga() {
  yield all([
    watchFetchChats(),
    watchAddChatMessage(),
  ]);
}
