import { Ph } from './../../../../models/ph';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-delete-ph-dialog',
  templateUrl: './delete-ph-dialog.component.html',
  styleUrls: ['./delete-ph-dialog.component.scss']
})
export class DeletePhDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePhDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ph
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
