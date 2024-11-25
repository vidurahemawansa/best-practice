import { createSelector, createFeatureSelector } from '@ngrx/store';
import { counterState } from './counter.state';

export const selectCounterState =
  createFeatureSelector<counterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: counterState) => state.count
);
