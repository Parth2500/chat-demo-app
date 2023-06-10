import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const MaterialImports = [MatSnackBarModule];
const getAccessToken = () => {
  return localStorage.getItem('access_token');
};
const config: SocketIoConfig = { url: 'http://localhost:3000/', options: {} };

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getAccessToken,
        allowedDomains: ['chat-api:3000'],
      },
    }),
    SocketIoModule.forRoot(config),
    ...MaterialImports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
