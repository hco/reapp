import React from 'react';

import { storiesOf } from '@storybook/react';
import { Message } from '../domain/Message';
import { MessageList } from './MessageList';

const messages: Message[] = [
  {
    message: 'Hallo Welt',
    date: 1552294755632,
    author: 'Elmarrr'
  },
  {
    message: 'Hello World',
    date: 1552294754374,
    author: 'Christian'
  }
];

storiesOf('Messages', module).add('<MessageList />', () => (
  <MessageList messages={messages} />
));
