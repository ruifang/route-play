import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-denied',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './denied.component.html',
  styleUrls: ['./denied.component.scss']
})
export class DeniedComponent implements OnInit {

  constructor(private service: ResultService) { }

  ngOnInit(): void {
  }

}
