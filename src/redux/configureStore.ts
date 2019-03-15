import { applyMiddleware, compose, createStore, Store } from 'redux';
import { ApplicationState } from './ApplicationState';
import { appReducer } from './reducer';
import thunk from 'redux-thunk';

export const configureStore: () => Store<ApplicationState> = () => {
  const composeEnhancers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));
};
