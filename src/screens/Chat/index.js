import React from 'react';
import { ActivityIndicator, FlatList, Keyboard, View } from 'react-native';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Realm from 'realm';

import ChatBox from './ChatBox';
import MessageBubble from './Message';
import QuickReply from './QuickReply';

// styling and components
import {
  Container,
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
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.scrollToBottom);
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidHide', this.scrollToBottom);
  }

  scrollToBottom() {
    if (this.props.chats.length > 0) {
      this.chatList.scrollToIndex({ index: 0 });
    }
  }

  render() {
    const { chats, isFetching, addChatMessage } = this.props;
    const chatsData = [...chats].reverse();
    return (
      <Container onLayout={this.scrollToBottom}>
        {isFetching && <ActivityIndicator />}
        <FlatList
          data={chatsData}
          getItemLayout={(data, index) => (
            { length: 30, offset: 30 * index, index }
          )}
          inverted
          ref={(flatList) => { this.chatList = flatList; }}
          keyExtractor={chat => chat.id}
          renderItem={({ item }) => <MessageBubble chat={item} />}
          ListHeaderComponent={() => <View style={{ height: 70 }} />}
        />
        <QuickReply addChatMessage={addChatMessage} />
        <ChatBox scrollToBottom={this.scrollToBottom} addChatMessage={addChatMessage} />
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

const componentLifeCycles = {
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

        for (let i = 0; i < 1; i += 1) {
          const mes = {
            bot: false,
            message: 'can you help meh',
            createdAt: date.toISOString(),
          };

          this.props.addChatMessage(mes);
        }
      });
  },
};

const EnhancedChatScreen = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle(componentLifeCycles),
)(ChatScreen);

EnhancedChatScreen.navigationOptions = {
  title: 'MUNDA',
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTitleStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
};

export default EnhancedChatScreen;
