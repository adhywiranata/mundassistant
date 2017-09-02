import Immutable from 'seamless-immutable';

import {
  FETCH_CHATS_LOADING,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
} from '../actions/constants';

const initialState = Immutable({
  data: [
    {
      id: 1,
      bot: true,
      message: 'Hello! Anything i can help with? bla bla bla jibberish jibber jabber',
      read: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      bot: false,
      message: 'Can you help me with this.. ? bla bla bla jibberish jibber jabber',
      read: true,
      createdAt: new Date(),
    },
  ],
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

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHATS_LOADING: return Immutable.set(state, 'isFetching', true);
    case FETCH_CHATS_SUCCESS: return fetchChatSuccess(state, payload);
    case FETCH_CHATS_FAILURE: return fetchChatFailure(state, payload);
    default: return state;
  }
};
