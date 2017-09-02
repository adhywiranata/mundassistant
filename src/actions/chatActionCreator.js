import {
  FETCH_CHATS,
  FETCH_CHATS_LOADING,
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_FAILURE,
  ADD_CHAT_MESSAGE,
} from './constants';

export const fetchChats = () => ({
  type: FETCH_CHATS,
});

export const fetchChatsLoading = () => ({
  type: FETCH_CHATS_LOADING,
});

export const fetchChatsSuccess = chats => ({
  type: FETCH_CHATS_SUCCESS,
  payload: chats,
});

export const fetchChatsFailure = error => ({
  type: FETCH_CHATS_FAILURE,
  payload: error,
});

export const addChatMessage = message => ({
  type: ADD_CHAT_MESSAGE,
  payload: message,
});
