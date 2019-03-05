import React from 'react';
import { Message } from '../domain/Message';

interface Props {
  message: Message;
}

export const MessageListItem = ({
  message: { message, author, date }
}: Props) => (
  <li>
    {author} wrote on {date.toLocaleString()}:<p>{message}</p>
  </li>
);
