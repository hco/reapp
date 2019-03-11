import { createStore, Store } from 'redux';
import { ApplicationState } from './ApplicationState';
import { appReducer } from './reducer';

export const configureStore: () => Store<ApplicationState> = () => {
  const enhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__();

  return createStore(appReducer, enhancer);
};
