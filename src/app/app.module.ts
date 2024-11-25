import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { HighlightDirective } from './shared/directives/change-color';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { userReducer } from './state/users.reducer';
import { UserEffects } from './state/users.effects';

import { counterReducer } from './state/counter/counter.reducer';
import { counterState } from './state/counter/counter.state';

import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { LogoutBtnComponent } from './authentication/logout-btn/logout-btn.component';
import { HomeComponent } from './modules/home/home.component';
import { UserListComponent } from './modules/user-list/user-list.component';
import { CounterComponent } from './modules/user-list/counter/counter.component';
import { CountBehaviorSubComponent } from './modules/user-list/count-behavior-sub/count-behavior-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutBtnComponent,
    HomeComponent,
    UserListComponent,
    CounterComponent,
    CountBehaviorSubComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AsyncPipe,
    HighlightDirective,
    AuthModule.forRoot({
      domain: 'dev-clqpfsy6d6v8qggc.uk.auth0.com',
      clientId: 'hj5amv4j8kQKnppJTdmz2cpLoi6PHr0U',
      authorizationParams: { redirect_uri: window.location.origin },
    }),
    StoreModule.forRoot({ users: userReducer, count: counterReducer }),
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
