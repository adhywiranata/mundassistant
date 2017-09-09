import { all } from 'redux-saga/effects';

import { watchFetchChats, watchAddChatMessage } from './chatSaga';
import { watchAddBotReply } from './botReplySaga';

export default function* rootSaga() {
  yield all([
    watchFetchChats(),
    watchAddChatMessage(),
    watchAddBotReply(),
  ]);
}
