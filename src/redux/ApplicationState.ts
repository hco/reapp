import { Message } from '../domain/Message';

export interface ApplicationState {
  userName: string;
  messages: {
    [key: string]: Message;
  };
}
