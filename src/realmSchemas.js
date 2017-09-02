export const commandSchema = {
  name: 'Command',
  properties: {
    name: {
      type: 'string',
      default: '',
    },
    template: 'string',
  },
};
