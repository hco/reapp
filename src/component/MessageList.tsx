import React from 'react';
import { Message } from '../domain/Message';
import { MessageListItem } from './MessageListItem';

interface Props {
  messages: Message[];
}

export const MessageList = ({ messages }: Props) => {
  return (
    <ul>
      {messages.map(message => (
        <MessageListItem key={message.date} message={message} />
      ))}
    </ul>
  );
};
