import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models/user';

export interface ISignOnService {
  createUser(user: IUser): Observable<IUser>;
  loginUser(): Observable<boolean>;
}

export const SignOnToken = new InjectionToken<ISignOnService>('ISignOnService');
