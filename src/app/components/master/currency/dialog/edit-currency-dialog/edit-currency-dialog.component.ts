import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-edit-currency-dialog',
  templateUrl: './edit-currency-dialog.component.html',
  styleUrls: ['./edit-currency-dialog.component.scss']
})
export class EditCurrencyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditCurrencyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Currency
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
