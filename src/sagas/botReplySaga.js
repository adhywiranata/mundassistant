import { put, call, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../actions/constants';

function* addBotReply({ payload }) {
  // payload is where the user's message is written
  yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_LOADING });
  try {
    // TODO process the payload (user's message)
    const replyMessage = {
      message: 'this is your reply :)',
    };
    yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_SUCCESS, payload: replyMessage });
  } catch (error) {
    yield put({ type: ActionTypes.ADD_BOT_CHAT_REPLY_FAILURE });
  }
}

export function* watchAddBotReply() {
  yield takeEvery(ActionTypes.ADD_BOT_CHAT_REPLY, addBotReply);
}
