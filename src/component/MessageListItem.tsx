import React from 'react';

interface Props {
  message: string;
  author: string;
  date: Date;
}

export const MessageListItem = ({ message, author, date }: Props) => (
  <li>
    {author} wrote on {date.toLocaleString()}:<p>{message}</p>
  </li>
);
