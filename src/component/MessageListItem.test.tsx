import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { Message } from '../domain/Message';
import { MessageListItem } from './MessageListItem';

const message: Message = {
  message: 'Hallo Welt',
  date: 1552294754374,
  author: 'Elmarrr'
};

describe('<MessageListItem />', () => {
  it('shows author and message', async () => {
    let actual = render(<MessageListItem message={message} />);
    expect(actual.baseElement).toHaveTextContent('Elmarrr');
    expect(actual.baseElement).toHaveTextContent('Hallo Welt');
  });
});
