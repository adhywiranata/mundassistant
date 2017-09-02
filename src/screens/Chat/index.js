import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Container, ChatList, ActionBar, Group, TimeStamp, Avatar, Bubble, Message } from './styles';
import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

const ChatScreen = ({ chats }) => (
  <Container>
    <ChatList>
      {chats.map((chat) => (
        <Group key={chat.id} bot={chat.bot}>
          {chat.bot && <Avatar />}
          <Bubble bot={chat.bot}>
            <Message bot={chat.bot}>{chat.message}</Message>
            <TimeStamp>18:30</TimeStamp>
          </Bubble>
        </Group>
      ))}
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

const mapStateToProps = state => ({
  chats: state.chat.data,
});

export default connect(
  mapStateToProps,
  null,
)(ChatScreen);
