import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-rate-modal',
  templateUrl: './rate-modal.component.html',
  styleUrls: ['./rate-modal.component.scss']
})
export class RateModalComponent implements OnInit {

  rating = 1;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.dialog.closeAll();
  }

}
