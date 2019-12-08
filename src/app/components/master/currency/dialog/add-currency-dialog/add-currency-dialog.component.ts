import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-add-currency-dialog',
  templateUrl: './add-currency-dialog.component.html',
  styleUrls: ['./add-currency-dialog.component.scss']
})
export class AddCurrencyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCurrencyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Currency
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
