import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'best-practice17';
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });
  }
}
