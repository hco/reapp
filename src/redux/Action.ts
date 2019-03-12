import { AddMessageAction, SetUserNameAction } from './actions';

type InitAction = {
  type: '@@INIT';
};

export type Action = InitAction | AddMessageAction | SetUserNameAction;
