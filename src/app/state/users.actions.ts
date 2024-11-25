import { createAction, props } from '@ngrx/store';
import { User } from 'src/models/user';

export const loadUsers = createAction('[User] load users');
export const loadUsersSuccess = createAction(
  '[User] load users success',
  props<{ users: User[] }>()
);
export const loadUsersError = createAction(
  '[User] load users',
  props<{ error: any }>()
);
