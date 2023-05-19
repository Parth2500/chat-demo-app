import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { test, TestService } from './services/test/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chat-app';

  testData$: Observable<test> = this.test.getTestData();

  constructor(private test: TestService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
