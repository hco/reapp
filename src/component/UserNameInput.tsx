import React, { ChangeEvent } from 'react';
interface Props {
  userName: string;
  onUserNameChange: (userName: string) => void;
}
export const UserNameInput = ({ userName, onUserNameChange }: Props) => (
  <input
    value={userName}
    onChange={(event: ChangeEvent<HTMLInputElement>) => {
      onUserNameChange(event.target.value);
      localStorage.setItem('reappUserName', event.target.value);
    }}
  />
);
