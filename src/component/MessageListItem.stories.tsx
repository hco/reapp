import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MessageListItem } from './MessageListItem';

storiesOf('Messages', module).add('<MessageListItem />', () => (
  <MessageListItem
    message={{
      id: 'CAAF90B7-9F35-4AD5-B52A-994473451E56',
      author: 'Elmar',
      date: Date.now(),
      message: 'Hallo Welt!'
    }}
  />
));
