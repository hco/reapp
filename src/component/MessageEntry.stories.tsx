import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { MessageEntry } from './MessageEntry';

storiesOf('Messages', module).add('<MessageEntry />', () => (
  <MessageEntry onSubmit={action('onSubmit')} />
));
