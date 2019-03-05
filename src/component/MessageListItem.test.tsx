import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { Message } from '../domain/Message';
import { MessageListItem } from './MessageListItem';

const message: Message = {
  message: 'Hallo Welt',
  date: new Date('2019-03-05T13:10:49+0100'),
  author: 'Elmarrr'
};

describe('<MessageListItem />', () => {
  it('shows author and message', async () => {
    let actual = render(<MessageListItem message={message} />);
    expect(actual.baseElement).toHaveTextContent('Elmarrr');
    expect(actual.baseElement).toHaveTextContent('Hallo Welt');
  });
});
