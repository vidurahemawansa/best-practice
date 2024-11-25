import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from '../core/services/user.service';
import { loadUsers, loadUsersSuccess, loadUsersError } from './users.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersError({ error })))
        )
      )
    )
  );
}
