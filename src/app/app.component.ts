import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = '';
  constructor(private service: AppService) { 
    this.result = service.resultPage;
  }

  onChange() {
    this.service.resultPage = this.result;
    console.log('set to: '+ this.service.resultPage);
  }
}
