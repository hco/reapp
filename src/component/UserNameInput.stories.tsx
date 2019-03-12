import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { UserNameInput } from './UserNameInput';

storiesOf('Other', module).add('<UserNameInput /> 2.0', () => {
  const UseState = ({ render }) => {
    const [userName, setUserName] = useState('');
    return render(userName, setUserName);
  };

  return (
    <UseState
      render={(userName, setUserName) => (
        <UserNameInput userName={userName} onUserNameChange={setUserName} />
      )}
    />
  );
});
