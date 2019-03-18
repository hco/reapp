import { Message } from '../domain/Message';
import { Action } from './Action';
import { MESSAGE_ADD, USERNAME_SET } from './actions';
import { ApplicationState } from './ApplicationState';

const initialState: ApplicationState = {
  userName: localStorage.getItem('reappUserName') || 'testuser',
  messages: {}
};

export const appReducer = (state = initialState, action: Action) => {
  if (action.type === MESSAGE_ADD) {
    return {
      ...state,
      messages: { ...state.messages, [action.payload.id]: action.payload }
    };
  }

  if (action.type === USERNAME_SET) {
    return {
      ...state,
      userName: action.payload.userName
    };
  }

  return state;
};

export const getUsername: (state: ApplicationState) => string = state =>
  state.userName;

export const getMessages: (state: ApplicationState) => Message[] = state =>
  Object.values(state.messages);
