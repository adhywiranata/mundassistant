import Immutable from 'seamless-immutable';

import {
  FETCH_CHATS_LOADING,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  ADD_CHAT_MESSAGE_SUCCESS,
  ADD_BOT_CHAT_REPLY_LOADING,
  ADD_BOT_CHAT_REPLY_SUCCESS,
} from '../actions/constants';

const initialState = Immutable({
  data: [],
  isFetching: false,
  isError: false,
  error: null,
});

const fetchChatSuccess = (state, data) => {
  let modifiedState = Immutable.set(state, 'isFetching', false);
  modifiedState = Immutable.set(modifiedState, 'error', null);
  return Immutable.set(modifiedState, 'data', data);
};

const fetchChatFailure = (state, error) => {
  const modifiedState = Immutable.set(state, 'isFetching', false);
  return Immutable.set(modifiedState, 'error', error);
};

const addChatMessage = (state, message) => {
  const id = state.data.length < 1 ? 1 : state.data[state.data.length - 1].id + 1;
  const newMessage = { ...message, id };
  const newData = state.data.concat(newMessage);
  return Immutable.set(state, 'data', newData);
};

const addBotChatLoadingMessage = (state) => {
  const id = state.data.length < 1 ? 1 : state.data[state.data.length - 1].id + 1;
  const newMessage = {
    id,
    bot: true,
    message: 'loading',
    createdAt: (new Date()).toISOString(),
  };
  const newData = state.data.concat(newMessage);
  return Immutable.set(state, 'data', newData);
};

const updateBotChatMessage = (state, payload) => {
  const lastMessage = state.data[state.data.length - 1];
  const updatedMessage = {
    ...lastMessage,
    message: payload.message,
    createdAt: (new Date()).toISOString(),
  };

  const newData = state.data.map(message => {
    if (message.id === updatedMessage.id) {
      return updatedMessage;
    }
    return message;
  });

  return Immutable.set(state, 'data', newData);
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHATS_LOADING: return Immutable.set(state, 'isFetching', true);
    case FETCH_CHATS_SUCCESS: return fetchChatSuccess(state, payload);
    case FETCH_CHATS_FAILURE: return fetchChatFailure(state, payload);
    case ADD_CHAT_MESSAGE_SUCCESS: return addChatMessage(state, payload);
    case ADD_BOT_CHAT_REPLY_LOADING: return addBotChatLoadingMessage(state, payload);
    case ADD_BOT_CHAT_REPLY_SUCCESS: return updateBotChatMessage(state, payload);
    default: return state;
  }
};
