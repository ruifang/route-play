import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approved',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.scss']
})
export class ApprovedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
