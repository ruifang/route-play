import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  resultPage: string = 'approved';
  constructor() { }
}
