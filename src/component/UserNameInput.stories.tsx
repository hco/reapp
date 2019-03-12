import { action } from '@storybook/addon-actions';
import React from 'react';

import { storiesOf } from '@storybook/react';
import { UserNameInput } from './UserNameInput';

storiesOf('Other', module).add('<UserNameInput />', () => (
  <UserNameInput onChange={action('onChange')} />
));
