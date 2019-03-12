import React from 'react';

import { storiesOf } from '@storybook/react';
import { Message } from '../domain/Message';
import { MessageList } from './MessageList';

const messages: Message[] = [
  {
    id: 'FC5B526E-A7FD-4F69-B114-6460EEF17728',
    message: 'Hallo Welt',
    date: 1552294755632,
    author: 'Elmarrr'
  },
  {
    id: 'FC5B526E-A7FD-4F69-B114-6460EEF17728',
    message: 'Hello World',
    date: 1552294754374,
    author: 'Christian'
  }
];

storiesOf('Messages', module).add('<MessageList />', () => (
  <MessageList messages={messages} />
));
