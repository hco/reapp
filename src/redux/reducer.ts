import { Action } from './Action';
import { MESSAGE_ADD } from './actions';
import { ApplicationState } from './ApplicationState';

const initialState: ApplicationState = {
  messages: [
    {
      id: '826B80DD-D954-4BDE-B75A-BB2C75D2B922',
      date: 1552294755632,
      author: 'ElmAR',
      message: 'Hallo Welt'
    }
  ]
};

export const appReducer = (state = initialState, action: Action) => {
  if (action.type === MESSAGE_ADD) {
    return {
      ...state,
      messages: [...state.messages, action.payload]
    };
  }

  return state;
};
