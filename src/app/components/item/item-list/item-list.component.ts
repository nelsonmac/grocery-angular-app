import { UomService } from './../../../services/uom.service';
import { CategoryService } from './../../../services/master/category/category.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';
import { AddItemDialogComponent } from '../dialog/add-item-dialog/add-item-dialog.component';
import { AddItemDialogData } from 'src/app/models/addItemDialogData';
import { Category } from 'src/app/models/category';
import { Currency } from 'src/app/models/currency';
import { Uom } from 'src/app/models/uom';
import { CurrencyService } from 'src/app/services/master/currency/currency.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  items: Observable<Item[]>;

  displayedColumns: string[] = ['name', 'category', 'uom', 'currency', 'defaultQty', 'pricePerUnit', 'action'];
  dataSource = new MatTableDataSource();
  dataDialog: AddItemDialogData;


  constructor(
    public itemService: ItemService,
    public categoryService: CategoryService,
    public currencyService: CurrencyService,
    public uomService: UomService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  openAddDialog(): void {
    this.dataDialog = new AddItemDialogData();
    this.categoryService.getCategoryList().subscribe(val => this.dataDialog.categories = val);
    this.currencyService.getCurrencyList().subscribe(val => this.dataDialog.currencies = val);
    this.uomService.getUomList().subscribe(val => this.dataDialog.uoms = val);
    this.dataDialog.item = new Item();
    this.dataDialog.item.category = new Category();
    this.dataDialog.item.currency = new Currency();
    this.dataDialog.item.uom = new Uom();

    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '250px',
      data: this.dataDialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.itemService.addItem(result.item).subscribe(response => {
        this.reloadData();
      });
    });
  }

  ngOnInit() {
    this.reloadData();
    this.items.subscribe(val => this.dataSource.data = val);
  }
  reloadData() {
    this.items = this.itemService.getItemList();
    this.items.subscribe(val => {
      this.dataSource.data = val;
      this.changeDetectorRefs.detectChanges();
    });
  }
  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe();
    this.reloadData();
  }

}
