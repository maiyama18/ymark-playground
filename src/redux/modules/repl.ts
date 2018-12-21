import { Reducer } from 'redux';
import { PayloadedAction } from '../types';

const sampleMd = `# Toy markdown interpreter

hello world!!!

### list items

- hello
- good morning
- how are you

### link

I learned the concept of interpreter by reading [this book](https://interpreterbook.com/) :)`;

export interface ReplState {
  inputMd: string;
}

export const replInitialState: ReplState = {
  inputMd: sampleMd,
};

export type ReplAction =
  | PayloadedAction<'CHANGE_INPUT_MD', { inputMd: string }>;

export const changeInputMd = (inputMd: string): ReplAction => ({
  type: 'CHANGE_INPUT_MD',
  payload: {
    inputMd,
  },
});

export const replReducer: Reducer<ReplState, ReplAction> = (
  state = replInitialState, action: ReplAction,
) => {
  switch (action.type) {
    case 'CHANGE_INPUT_MD':
      return {
        ...state,
        inputMd: action.payload.inputMd,
      };
    default:
      return state;
  }
};
