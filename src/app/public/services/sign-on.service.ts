import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { catchError, Observable, tap } from 'rxjs';
import { LoginResponse } from 'src/app/models/login-response.interface';
import { IUser } from 'src/app/models/user.interface';
import { ISignOnService } from './iservices/sign-on.service.interface';

@Injectable({
  providedIn: 'root',
})
export class SignOnService implements ISignOnService {
  snackBarConfig: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
  };

  constructor(private httpService: HttpClient, private snackBar: MatSnackBar) {}

  createUser(user: IUser): Observable<IUser> {
    return this.httpService.post<IUser>('api/users', user).pipe(
      tap((createdUser: IUser) => {
        this.snackBar.open(
          `User ${createdUser.username} created successfully!`,
          'Close',
          this.snackBarConfig
        );
      }),
      catchError((error) => {
        this.snackBar.open(
          `User could not be created, Due to:  ${error.message}`,
          'Close',
          this.snackBarConfig
        );
        throw error;
      })
    );
  }

  loginUser(user: IUser): Observable<LoginResponse> {
    return this.httpService.post<LoginResponse>('api/users/login', user).pipe(
      tap((response: LoginResponse) => {
        localStorage.setItem('access_token', response.access_token);
        this.snackBar.open(`Login successful!`, 'Close', this.snackBarConfig);
      }),
      catchError((error) => {
        this.snackBar.open(
          `Login unsuccessful, Due to:  ${error.message}`,
          'Close',
          this.snackBarConfig
        );
        throw error;
      })
    );
  }

  logoutUser() {
    localStorage.clear();
  }
}
