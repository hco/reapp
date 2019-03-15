import { Message } from '../domain/Message';
import uuid from 'uuid/v4';
import base64 from 'base-64';
export const MESSAGE_ADD = 'MESSAGE/ADD';

export const addMessage = (messageText: string, author: string) => {
  let message: Message = {
    id: uuid(),
    message: messageText,
    author,
    date: Date.now()
  };

  fetch('https://couch.suora.training/reapp/', {
    credentials: 'include',
    headers: {
      Auth: 'Basic ' + base64.encode('jsdays' + ':' + 'munich'),
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ ...message, _id: message.id })
  });
  return {
    type: MESSAGE_ADD,
    payload: message
  };
};

export interface AddMessageAction {
  type: 'MESSAGE/ADD';
  payload: Message;
}

export const USERNAME_SET = 'USERNAME/SET';

export interface SetUserNameAction {
  type: 'USERNAME/SET';
  payload: {
    userName: string;
  };
}

export const setUsername: (string) => SetUserNameAction = userName => ({
  type: USERNAME_SET,
  payload: {
    userName
  }
});

export const fetchMessages = () => async dispatch => {
  const response = await fetch(
    'https://couch.suora.training/reapp/_all_docs?include_docs=true&limit=200',
    {
      credentials: 'include',
      headers: {
        Auth: 'Basic ' + base64.encode('jsdays' + ':' + 'munich')
      }
    }
  );

  const data = await response.json();
  data.rows
    .map(row => row.doc)
    .forEach(doc =>
      dispatch({
        type: MESSAGE_ADD,
        payload: doc
      })
    );
};
