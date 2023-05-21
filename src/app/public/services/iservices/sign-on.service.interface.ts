import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/models/login-response.interface';
import { IUser } from 'src/app/models/user.interface';

export interface ISignOnService {
  createUser(user: IUser): Observable<IUser>;
  loginUser(user: IUser): Observable<LoginResponse>;
  logoutUser(): void;
}

export const SignOnToken = new InjectionToken<ISignOnService>('ISignOnService');
