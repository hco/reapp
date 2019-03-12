import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';

interface Props {
  onChange: (userName: string) => void;
}

export const UserNameInput = ({ onChange }: Props) => {
  const [userName, setUserName] = useState(
    localStorage.getItem('reappUserName') || ''
  );

  // TODO @Elmar: Mir ist grade keine gute Idee gekommen,
  // wie ich in einer functional component beim ersten rendern den user aus
  // localstorage ausgeben kann, ohne das bei jedem rendering zu machen.
  // außer so. hast du eine bessere idee? :)
  const memoizedOnChange = useCallback(onChange, [userName]);

  // We fire the onChange immediately,
  // because we read it from the localStorage here.
  memoizedOnChange(userName);

  return (
    <input
      title="userName"
      value={userName}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        const newUserName = event.target.value;

        setUserName(newUserName);
        localStorage.setItem('reappUserName', newUserName);
      }}
    />
  );
};
