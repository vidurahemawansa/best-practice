import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { PostCachedService } from 'src/app/core/services/post-cached.service';
import { User } from 'src/models/user';
import { Subscription, catchError } from 'rxjs';
import { Post } from 'src/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  userSubscription: Subscription | undefined;
  postSubscription: Subscription | undefined;
  constructor(
    private userService: UserService,
    private postCachedService: PostCachedService
  ) {}

  ngOnInit(): void {
    this.getUserData();
    this.getPostData();
  }

  getUserData() {
    this.userSubscription = this.userService
      .getUsers()
      .pipe(
        catchError((error) => {
          console.error('Error getting users ', error);
          return [];
        })
      )
      .subscribe((users: User[]) => {
        console.log(users);
      });
  }

  getPostData() {
    this.postSubscription = this.postCachedService
      .getPosts()
      ?.pipe(
        catchError((error) => {
          console.error(error);
          return [];
        })
      )
      .subscribe((posts: Post[]) => {
        console.log(posts);
      });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
