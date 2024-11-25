import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from './counter.actions';
import { counterState, initState } from './counter.state';

export const counterReducer = createReducer(
  initState,
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);
