import { Message } from '../domain/Message';

export interface ApplicationState {
  messages: Message[];
}
