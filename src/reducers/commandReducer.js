const initialState = {
  data: [
    {
      id: 1,
      title: 'Gojek',
      type: 'Message Template',
    },
  ],
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch(payload) {
    default: return state;
  }
};
