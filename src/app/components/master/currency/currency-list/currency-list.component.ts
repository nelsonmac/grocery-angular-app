import { Observable } from 'rxjs';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CurrencyService } from 'src/app/services/master/currency/currency.service';
import { Currency } from 'src/app/models/currency';
import { DeleteCurrencyDialogComponent } from '../dialog/delete-currency-dialog/delete-currency-dialog.component';
import { EditCurrencyDialogComponent } from '../dialog/edit-currency-dialog/edit-currency-dialog.component';
import { AddCurrencyDialogComponent } from '../dialog/add-currency-dialog/add-currency-dialog.component';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.scss']
})
export class CurrencyListComponent implements OnInit {

  currencies: Observable<Currency[]>;

  displayedColumns: string[] = ['name', 'code', 'countryCode', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    public currencyService: CurrencyService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  openDeleteDialog(currency: Currency): void {
    const dialogRef = this.dialog.open(DeleteCurrencyDialogComponent, {
      width: '250px',
      data: currency
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteCurrency(result.id);
      this.reloadData();
    });
  }

  openEditDialog(currency: Currency): void {
    const dialogRef = this.dialog.open(EditCurrencyDialogComponent, {
      width: '250px',
      data: currency
    });

    dialogRef.afterClosed().subscribe(result => {
      this.currencyService.addCurrency(result).subscribe();
      console.log(this.currencies);
      this.reloadData();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddCurrencyDialogComponent, {
      width: '250px',
      data: new Currency()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.currencyService.addCurrency(result).subscribe(response => {
        this.reloadData();
      });
    });
  }

  ngOnInit() {
    this.reloadData();
    this.currencies.subscribe(val => this.dataSource.data = val);
  }
  reloadData() {
    this.currencies = this.currencyService.getCurrencyList();
    this.currencies.subscribe(val => {
      this.dataSource.data = val;
      this.changeDetectorRefs.detectChanges();
    });
  }
  deleteCurrency(id: string) {
    this.currencyService.deleteCurrency(id).subscribe();
    this.reloadData();
  }
}
