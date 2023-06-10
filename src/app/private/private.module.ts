import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { ChatToken } from './services/iservices/chat.service.interface';
import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, PrivateRoutingModule],
  providers: [{ provide: ChatToken, useClass: ChatService }],
})
export class PrivateModule {}
