import { put, call, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../actions/constants';

function* addBotReply({ payload }) {
  // payload is where the user's message is written.s
  yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_LOADING });
  try {
    yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_SUCCESS });
  } catch (error) {
    yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_FAILURE });
  }
}

export function* watchAddBotReply() {
  yield takeEvery(ActionTypes.ADD_BOT_CHAT_REPLY, addBotReply);
}
