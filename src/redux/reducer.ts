import { combineReducers, Reducer } from 'redux';
import { replInitialState, replReducer, ReplState } from './modules/repl';
import { AnyAction } from './types';

export interface AppState {
  repl: ReplState;
}

export const initialState = {
  repl: replInitialState,
};

export const rootReducer: Reducer<AppState, AnyAction> = combineReducers({
  repl: replReducer,
});
