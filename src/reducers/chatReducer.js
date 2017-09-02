import Immutable from 'seamless-immutable';

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
});

export default (state = initialState, { type, payload }) => {
  switch(type) {
    default: return state;
  }
};
