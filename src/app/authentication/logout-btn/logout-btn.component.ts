import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
})
export class LogoutBtnComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
