import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import { QuickReplySection, QuickReplyBubble, QuickReplyMessage } from './styles';

const replies = [
  { id: 1, message: 'order me a gojek!' },
  { id: 2, message: 'send an email' },
  { id: 3, message: 'add a todo' },
  { id: 4, message: 'open gojek app' },
  { id: 5, message: 'show my calendar' },
  { id: 6, message: 'remind me something' },
];
export default () => (
  <QuickReplySection>
    <FlatList
      data={replies}
      keyExtractor={reply => reply.id}
      horizontal
      renderItem={({ item }) => (
        <QuickReplyBubble activeOpacity={0.5}>
          <QuickReplyMessage>{ item.message }</QuickReplyMessage>
        </QuickReplyBubble>
      )}
    />
  </QuickReplySection>
);
