import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { Message } from '../domain/Message';
import { MessageList } from './MessageList';

const messages: Message[] = [
  {
    id: 'C2785718-0721-4759-9F80-787EEDC7463A',
    message: 'Hallo Welt',
    date: 1552294755632,
    author: 'Elmarrr'
  },
  {
    id: '4C0FDEE1-B6DC-44E3-8C48-0541C3647CC6',
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
