import React, { useState } from 'react';
import { MessageEntry } from './component/MessageEntry';
import { MessageList } from './component/MessageList';
import { Message } from './domain/Message';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <React.Fragment>
      <MessageList messages={messages} />
      <MessageEntry
        onSubmit={({ message }) => {
          setMessages([
            ...messages,
            { message, author: 'Elmar', date: new Date() }
          ]);
        }}
      />
    </React.Fragment>
  );
};
export default App;
