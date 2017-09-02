export const chatSchema = {
  name: 'Chat',
  properties: {
    id: 'int',
    bot: 'bool',
    message: 'string',
    createdAt: 'date',
  },
};

export const commandSchema = {
  name: 'Command',
  properties: {
    id: 'int',
    name: 'string',
    template: 'string',
  },
};
