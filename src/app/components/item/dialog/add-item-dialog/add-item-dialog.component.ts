import { Component, OnInit, Inject } from '@angular/core';
import { Item } from 'src/app/models/item';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddItemDialogData } from 'src/app/models/addItemDialogData';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddItemDialogData
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
