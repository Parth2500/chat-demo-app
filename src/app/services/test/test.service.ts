import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface test {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private httpClient: HttpClient) {}

  getTestData(): Observable<test> {
    return this.httpClient.get<test>('api');
  }
}
