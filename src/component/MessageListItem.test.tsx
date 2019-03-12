import React from 'react';
import { render, waitForElement } from 'react-testing-library';
import { Message } from '../domain/Message';
import { MessageListItem } from './MessageListItem';

const message: Message = {
  id: '2263EDA5-718F-4940-A2DF-E51CFD6D38C4',
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
