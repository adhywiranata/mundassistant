import React from 'react';
import { View, Text } from 'react-native';

import { Container, Group, TimeStamp, Avatar, Bubble, Message } from './styles';
import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

const ChatScreen = () => (
  <Container>
    <Group bot>
      <Avatar />
      <Bubble bot>
        <Message>Hello! Anything i can help with?</Message>
        <TimeStamp>18:30</TimeStamp>
      </Bubble>
    </Group>
    <Group bot>
      <Avatar />
      <Bubble bot>
        <Message>Hello! Anything i can help with?</Message>
        <TimeStamp>18:30</TimeStamp>
      </Bubble>
    </Group>
    <Group>
      <Bubble>
        <Message>I need to register a gojek auto message!</Message>
        <TimeStamp>18:30</TimeStamp>
      </Bubble>
    </Group>
  </Container>
);

ChatScreen.navigationOptions = {
  title: 'CHAT',
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTitleStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
};

export default ChatScreen;
