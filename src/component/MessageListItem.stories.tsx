import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MessageListItem } from './MessageListItem';

storiesOf('Messages', module).add('<MessageListItem />', () => (
  <MessageListItem
    message={{ author: 'Elmar', date: new Date(), message: 'Hallo Welt!' }}
  />
));
