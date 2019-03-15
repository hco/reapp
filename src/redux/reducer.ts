import { Action } from './Action';
import { MESSAGE_ADD, USERNAME_SET } from './actions';
import { ApplicationState } from './ApplicationState';

const initialState: ApplicationState = {
  userName: localStorage.getItem('reappUserName') || 'testuser',
  messages: {
    '826B80DD-D954-4BDE-B75A-BB2C75D2B922': {
      id: '826B80DD-D954-4BDE-B75A-BB2C75D2B922',
      date: 1552294755632,
      author: 'ElmAR',
      message: 'Hallo Welt'
    }
  }
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
