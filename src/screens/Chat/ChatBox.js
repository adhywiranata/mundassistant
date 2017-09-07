import React from 'react';
import { connect } from 'react-redux';

// data
import {
  addChatMessage as addChatMessageAction,
} from '../../actions/chatActionCreator';

// styling and components
import {
  ActionBar,
  InputWrapper,
  MessageInput,
  SendMessageButton,
  ButtonLabel,
} from './styles';

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
    this.props.scrollToBottom();
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

export default connect(
  null,
  dispatch => ({
    addChatMessage: message => dispatch(addChatMessageAction(message)),
  }),
)(ChatBox);
