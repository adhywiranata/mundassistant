import React from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Realm from 'realm';
import moment from 'moment';

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
  addChatMessage as addChatMessageAction,
} from '../../actions/chatActionCreator';
import { chatSchema } from '../../realmSchemas';

// mini "hacky" helper
const parseRealmObject = realmObj => JSON.parse(JSON.stringify(realmObj));

class ChatBox extends React.Component {
  constructor() {
    super();
    this.state = {
      chatMessage: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(chatMessage) {
    this.setState({ chatMessage });
  }

  handleSubmit() {
    const date = new Date();
    const message = {
      bot: false,
      message: this.state.chatMessage,
      createdAt: date.toISOString(),
    };

    this.setState({ chatMessage: '' });
    this.props.addChatMessage(message);
  }

  render() {
    return (
      <ActionBar>
        <InputWrapper>
          <MessageInput
            autoFocus
            underlineColorAndroid={'transparent'}
            selectionColor={'#666666'}
            onChangeText={this.handleChange}
            onSubmitEditing={this.handleSubmit}
            value={this.state.chatMessage}
          />
        </InputWrapper>
        <SendMessageButton onPress={this.handleSubmit}>
          <ButtonLabel>SEND</ButtonLabel>
        </SendMessageButton>
      </ActionBar>
    );
  }
}
const WrappedChatBox = connect(
  null,
  dispatch => ({
    addChatMessage: message => dispatch(addChatMessageAction(message)),
  }),
)(ChatBox);

const ChatScreen = ({ chats, isFetching, fetchChats, addChatMessage }) => (
  <Container>
    <ChatList>
      {isFetching && <ActivityIndicator />}
      {!isFetching && chats.map(chat => (
        <Group key={chat.id} bot={chat.bot}>
          {chat.bot && <Avatar />}
          <Bubble bot={chat.bot}>
            <Message bot={chat.bot}>{chat.message}</Message>
            <TimeStamp>{moment(chat.createdAt).format('hh:mm')}</TimeStamp>
          </Bubble>
        </Group>
      ))}
    </ChatList>
    <WrappedChatBox />
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
            // realm.delete(realm.objects('Chat'));
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
