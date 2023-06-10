import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { IChatService } from './iservices/chat.service.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements IChatService {
  constructor(private socket: Socket) {}

  sendMessage(message: string) {}

  getMessage(): Observable<string> {
    return this.socket.fromEvent('message');
  }
}
