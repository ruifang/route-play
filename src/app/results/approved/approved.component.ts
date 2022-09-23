import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-approved',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

  constructor(service: ResultService) { }

  ngOnInit(): void {
  }

}
