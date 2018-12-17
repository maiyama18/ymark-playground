import { compose, createStore } from 'redux';
import { initialState, rootReducer } from './reducer';

const enhancers = [];

const reduxDevtoolsExtension = (window as any).devToolsExtension;
if (process.env.NODE_ENV === 'development' && typeof reduxDevtoolsExtension === 'function') {
  enhancers.push(reduxDevtoolsExtension());
}
export const store = createStore(rootReducer, initialState, compose(...enhancers));
