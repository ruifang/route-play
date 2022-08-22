import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, tap } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result = '';
  constructor(private service: AppService, private router: Router, private route: ActivatedRoute) {
    this.result = service.resultPage;
    this.router.events.pipe(
      filter(e=>e instanceof NavigationEnd)
    ).subscribe(e=>{
      console.log(`---------${JSON.stringify(route.snapshot.firstChild?.data)}-----------`);
    });
  }

  onChange() {
    this.service.resultPage = this.result;
    console.log('set to: ' + this.service.resultPage);
  }

  async seeResult() {
    await this.router.navigate(['/result']);
  }
}
