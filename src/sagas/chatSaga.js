import { put, call, takeEvery } from 'redux-saga/effects';

import * as ActionTypes from '../actions/constants';

function* fetchChats() {
  yield put({ type: ActionTypes.FETCH_CHATS_LOADING });
  try {
    const chats = {};
    // const chats = yield call(sumAPICall);
    yield put({ type: ActionTypes.FETCH_CHATS_SUCCESS, payload: chats });
  } catch (error) {
    yield put({ type: ActionTypes.FETCH_CHATS_FAILURE, payload: error });
  }
}

export function* watchFetchChats() {
  yield takeEvery(ActionTypes.FETCH_CHATS, fetchChats);
}

function* addChatMessage({ payload }) {
  yield put({ type: ActionTypes.ADD_CHAT_MESSAGE_LOADING });
  try {
    yield put({ type: ActionTypes.ADD_CHAT_MESSAGE_SUCCESS, payload });

    if (!payload.bot) { // if message is not from bot
      const botLoadingTemplate = {
        bot: true,
        message: 'loading',
        createdAt: (new Date()).toISOString(),
      };

      yield put({ type: ActionTypes.ADD_CHAT_MESSAGE_SUCCESS, payload: botLoadingTemplate });
    }
  } catch (error) {
    yield put({ type: ActionTypes.ADD_CHAT_MESSAGE_FAILURE });
  }
}

export function* watchAddChatMessage() {
  yield takeEvery(ActionTypes.ADD_CHAT_MESSAGE, addChatMessage);
}
