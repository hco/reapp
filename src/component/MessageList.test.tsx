import React from 'react';
import { render, waitForElement } from 'react-testing-library';
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

describe('<MessageListItem />', () => {
  it('shows author and message', async () => {
    let actual = render(<MessageList messages={messages} />);
    expect(actual.baseElement).toHaveTextContent('Elmarrr');
    expect(actual.baseElement).toHaveTextContent('Christian');
  });
});
