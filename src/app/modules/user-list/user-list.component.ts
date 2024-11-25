import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { loadUsers } from 'src/app/state/users.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  userList!: User[];
  constructor(private store: Store<{ users: User[] }>) {
    this.users$ = this.store.select((state) => state.users);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    this.users$.subscribe((result: any) => {
      this.userList = result?.users;
      console.log(this.userList);
    });
  }
}
