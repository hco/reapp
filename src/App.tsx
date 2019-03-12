import React, { useState } from 'react';
import { MessageEntry } from './component/MessageEntry';
import { MessageList } from './component/MessageList';
import { ReduxMessageEntry } from './component/ReduxMessageEntry';
import { ReduxMessageList } from './component/ReduxMessageList';
import { UserNameInputRedux } from './component/UserNameInputRedux';
import { Message } from './domain/Message';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();
const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <Provider store={store}>
      <label>UserName</label>
      <UserNameInputRedux />
      <ReduxMessageList />
      <ReduxMessageEntry />
      <hr />
      <MessageList messages={messages} />
      <MessageEntry
        onSubmit={({ message }) => {
          setMessages([
            ...messages,
            {
              message,
              id: new Date().toISOString(),
              author: 'Elmar',
              date: Date.now()
            }
          ]);
        }}
      />
    </Provider>
  );
};
export default App;
