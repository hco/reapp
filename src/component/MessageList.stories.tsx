import React from 'react';

import { storiesOf } from '@storybook/react';
import { Message } from '../domain/Message';
import { MessageList } from './MessageList';

const messages: Message[] = [
  {
    message: 'Hallo Welt',
    date: new Date('2019-03-05T13:10:49+0100'),
    author: 'Elmarrr'
  },
  {
    message: 'Hello World',
    date: new Date('2019-03-06T13:10:49+0100'),
    author: 'Christian'
  }
];

storiesOf('Messages', module).add('<MessageList />', () => (
  <MessageList messages={messages} />
));
