import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  resultPage: string = 'approved';
  constructor(private http: HttpClient) {}

  getCurrentResult(): Observable<string> {
    console.log('getting result');
    return this.http.get('https://httpbin.org/delay/1').pipe(map((x) => this.resultPage));
  }
}
