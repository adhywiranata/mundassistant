import Immutable from 'seamless-immutable';

import {
  FETCH_CHATS_LOADING,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  ADD_CHAT_MESSAGE,
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
  return Immutable.set(state, 'data', state.data.concat(newMessage));
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHATS_LOADING: return Immutable.set(state, 'isFetching', true);
    case FETCH_CHATS_SUCCESS: return fetchChatSuccess(state, payload);
    case FETCH_CHATS_FAILURE: return fetchChatFailure(state, payload);
    case ADD_CHAT_MESSAGE: return addChatMessage(state, payload);
    default: return state;
  }
};
