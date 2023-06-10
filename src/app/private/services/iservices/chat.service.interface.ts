import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface IChatService {
  sendMessage(message: string): void;
  getMessage(): Observable<string>;
}

export const ChatToken = new InjectionToken<IChatService>('IChatService');
