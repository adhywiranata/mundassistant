import Immutable from 'seamless-immutable';

const initialState = Immutable({
  data: [
    {
      id: 1,
      title: 'Gojek',
      type: 'Message Template',
    },
  ],
  isFetching: false,
  isError: false,
});

const addCommand = (state, testParam) => {
  const newCommand = {
    id: 2,
    title: 'Grab',
    type: 'Message Template',
  };

  const commands = state.data.concat(newCommand);
  return Immutable.set(state, data, commands);
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case 'ADD_COMMAND': return addCommand(state, payload);
    default: return state;
  }
};
