import React from 'react';
import { render, waitForElement } from 'react-testing-library';
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

describe('<MessageListItem />', () => {
  it('shows author and message', async () => {
    let actual = render(<MessageList messages={messages} />);
    expect(actual.baseElement).toHaveTextContent('Elmarrr');
    expect(actual.baseElement).toHaveTextContent('Christian');
  });
});
