import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomSocketService } from './custom-socket.service';
import { IChatService } from './iservices/chat.service.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements IChatService {
  constructor(private socket: CustomSocketService) {}

  sendMessage(message: string) {}

  getMessage(): Observable<string> {
    return this.socket.fromEvent('message');
  }
}
