import React from 'react';
import { View, Text } from 'react-native';

import { Container, ChatList, ActionBar, Group, TimeStamp, Avatar, Bubble, Message } from './styles';
import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

const ChatScreen = () => (
  <Container>
    <ChatList>
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
    </ChatList>
    <ActionBar />
  </Container>
);

ChatScreen.navigationOptions = {
  title: 'WHAT DO YOU NEED? :)',
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTitleStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
};

export default ChatScreen;
