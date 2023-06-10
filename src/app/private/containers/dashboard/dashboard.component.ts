import { Component, Inject } from '@angular/core';
import {
  ChatToken,
  IChatService,
} from '../../services/iservices/chat.service.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

  title = this.chatService.getMessage();

  constructor(@Inject(ChatToken) private chatService: IChatService) {}
}
