import React, { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onSubmit: (event: { message: string }) => void;
}

export const MessageEntry = ({ onSubmit }: Props) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message !== '') {
      onSubmit({ message });
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        title="Message"
        value={message}
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          setMessage(evt.target.value)
        }
      />
      <button type="submit">Send</button>
    </form>
  );
};
