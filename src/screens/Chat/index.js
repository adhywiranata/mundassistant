import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Realm from 'realm';
import moment from 'moment';

import ChatBox from './ChatBox';

// styling and components
import {
  Container,
  ChatList,
  Group,
  TimeStamp,
  Avatar,
  Bubble,
  Message,
  LoadingDots,
} from './styles';
import { colors } from '../../config/themeConstants';

// data
import {
  fetchChats as fetchChatsAction,
  fetchChatsLoading as fetchChatsLoadingAction,
  fetchChatsSuccess as fetchChatsSuccessAction,
  fetchChatsFailure as fetchChatsFailureAction,
  addChatMessage as addChatMessageAction,
} from '../../actions/chatActionCreator';
import { chatSchema } from '../../realmSchemas';

// mini "hacky" helper
const parseRealmObject = realmObj => JSON.parse(JSON.stringify(realmObj));

class ChatScreen extends React.Component {
  constructor() {
    super();
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  scrollToBottom() {
    // this.chatList.scrollToOffset(index => ({ offset: index * 100 }));
    this.chatList.scrollToEnd();
  }

  render() {
    const { chats, isFetching, fetchChats, addChatMessage } = this.props;
    return (
      <Container>
        {isFetching && <ActivityIndicator />}
        <FlatList
          data={chats}
          getItemLayout={(data, index) => (
            { length: 30, offset: 30 * index, index }
          )}
          ref={(flatList) => { this.chatList = flatList; }}
          keyExtractor={chat => chat.id}
          renderItem={({ item }) => {
            const chat = item;
            return (
              <Group bot={chat.bot}>
                {chat.bot && <Avatar />}
                {chat.message !== 'loading' && (
                  <Bubble bot={chat.bot}>
                    <Message bot={chat.bot}>{chat.message}</Message>
                    <TimeStamp>{moment(chat.createdAt).format('hh:mm')}</TimeStamp>
                  </Bubble>
                )}
                {chat.message === 'loading' && (
                  <Bubble bot={chat.bot}>
                    <LoadingDots>...</LoadingDots>
                    <TimeStamp>Munda is typing..</TimeStamp>
                  </Bubble>
                )}
              </Group>
            );
          }}
        />
        <ChatBox scrollToBottom={this.scrollToBottom} />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  chats: state.chat.data,
  isFetching: state.chat.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchChats: () => dispatch(fetchChatsAction()),
  fetchChatsLoading: () => dispatch(fetchChatsLoadingAction()),
  fetchChatsSuccess: data => dispatch(fetchChatsSuccessAction(data)),
  fetchChatsFailure: error => dispatch(fetchChatsFailureAction(error)),
  addChatMessage: message => dispatch(addChatMessageAction(message)),
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
          realm.write(() => {
            // realm.create('Chat', {
            // id: 1, bot: true, message: 'hello can I help you?', createdAt: new Date() });
            //   realm.create('Chat', {
            // id: 2, bot: false, message: 'can i set a new command?', createdAt: new Date() });
          });
          const chats = parseRealmObject(realm.objects('Chat'));
          const chatsArr = Object.keys(chats).map(each => chats[each]);
          this.props.fetchChatsSuccess(chatsArr);

          const date = new Date();
          const message = {
            bot: true,
            message: 'Hello! How can I help you to be more productive? ',
            createdAt: date.toISOString(),
          };

          this.props.addChatMessage(message);

          const message2 = {
            bot: true,
            message: 'loading',
            createdAt: date.toISOString(),
          };

          this.props.addChatMessage(message2);
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
