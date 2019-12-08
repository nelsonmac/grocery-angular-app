import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Currency } from 'src/app/models/currency';

@Component({
  selector: 'app-delete-currency-dialog',
  templateUrl: './delete-currency-dialog.component.html',
  styleUrls: ['./delete-currency-dialog.component.scss']
})
export class DeleteCurrencyDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCurrencyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Currency
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
