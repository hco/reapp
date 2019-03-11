import { Message } from '../domain/Message';

export const MESSAGE_ADD = 'MESSAGE/ADD';

export const addMessage = (message: string, author: string) => ({
  type: MESSAGE_ADD,
  payload: {
    message,
    author,
    date: new Date()
  }
});

export interface AddMessageAction {
  type: 'MESSAGE/ADD';
  payload: Message;
}
