import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import moment from 'moment';

// styling and components
import {
  Group,
  TimeStamp,
  Avatar,
  Bubble,
  Message,
  LoadingDots,
} from './styles';

const MessageComponent = ({ chat }) => (
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

export default onlyUpdateForKeys(['chat'])(MessageComponent);
