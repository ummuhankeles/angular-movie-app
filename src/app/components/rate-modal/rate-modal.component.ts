import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss']
})
export class RateModalComponent implements OnInit {

  rating = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

}
