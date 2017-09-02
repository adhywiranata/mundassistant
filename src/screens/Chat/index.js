import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Realm from 'realm';

// styling and components
import {
  Container,
  ChatList,
  ActionBar,
  InputWrapper,
  MessageInput,
  SendMessageButton,
  ButtonLabel,
  Group,
  TimeStamp,
  Avatar,
  Bubble,
  Message,
} from './styles';
import { colors } from '../../config/themeConstants';

// data
import {
  fetchChats as fetchChatsAction,
  fetchChatsLoading as fetchChatsLoadingAction,
  fetchChatsSuccess as fetchChatsSuccessAction,
  fetchChatsFailure as fetchChatsFailureAction,
} from '../../actions/chatActionCreator';
import { chatSchema } from '../../realmSchemas';

// mini "hacky" helper
const parseRealmObject = realmObj => JSON.parse(JSON.stringify(realmObj));

const ChatScreen = ({ chats, isFetching, fetchChats }) => (
  <Container>
    <ChatList>
      {isFetching && <ActivityIndicator />}
      {!isFetching && chats.map(chat => (
        <Group key={chat.id} bot={chat.bot}>
          {chat.bot && <Avatar />}
          <Bubble bot={chat.bot}>
            <Message bot={chat.bot}>{chat.message}</Message>
            <TimeStamp>18:30</TimeStamp>
          </Bubble>
        </Group>
      ))}
    </ChatList>
    <ActionBar>
      <InputWrapper>
        <MessageInput autoFocus underlineColorAndroid={'transparent'} selectionColor={'#666666'} />
      </InputWrapper>
      <SendMessageButton>
        <ButtonLabel>Send</ButtonLabel>
      </SendMessageButton>
    </ActionBar>
  </Container>
);

const mapStateToProps = state => ({
  chats: state.chat.data,
  isFetching: state.chat.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchChats: () => dispatch(fetchChatsAction()),
  fetchChatsLoading: () => dispatch(fetchChatsLoadingAction()),
  fetchChatsSuccess: data => dispatch(fetchChatsSuccessAction(data)),
  fetchChatsFailure: error => dispatch(fetchChatsFailureAction(error)),
});

const EnhancedChatScreen = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      this.props.fetchChatsLoading();
      Realm.open({ schema: [chatSchema] })
        .then((realm) => {
          // realm.write(() => {
          //   realm.create('Chat', {
          // id: 1, bot: true, message: 'hello can I help you?', createdAt: new Date() });
          //   realm.create('Chat', {
          // id: 2, bot: false, message: 'can i set a new command?', createdAt: new Date() });
          // });
          const chats = parseRealmObject(realm.objects('Chat'));
          const chatsArr = Object.keys(chats).map(each => chats[each]);
          this.props.fetchChatsSuccess(chatsArr);
        });
    },
  }),
)(ChatScreen);

EnhancedChatScreen.navigationOptions = {
  title: 'WHAT DO YOU NEED? :)',
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTitleStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
};

export default EnhancedChatScreen;
