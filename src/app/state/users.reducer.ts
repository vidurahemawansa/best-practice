import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersError } from './users.actions';
import { User } from 'src/models/user';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(loadUsers, (state) => ({ ...state, loading: true })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadUsersError, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
