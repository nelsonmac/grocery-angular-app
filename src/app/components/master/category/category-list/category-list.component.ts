import { AddDialogComponent } from './../../uom/dialog/add-dialog/add-dialog.component';
import { EditDialogComponent } from './../../uom/dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './../../uom/dialog/delete-dialog/delete-dialog.component';
import { CategoryService } from './../../../../services/master/category/category.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: Observable<Category[]>;

  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource = new MatTableDataSource();


  constructor(
    public categoryService: CategoryService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef) { }

  openDeleteDialog(category: Category): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: category
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteCategory(result.id);
      this.reloadData();
    });
  }

  openEditDialog(category: Category): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: category
    });

    dialogRef.afterClosed().subscribe(result => {
      this.categoryService.addCategory(result).subscribe();
      this.reloadData();
    });
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data: new Category()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.categoryService.addCategory(result).subscribe(response => {
        this.reloadData();
      });
    });
  }
  ngOnInit() {
    this.reloadData();
    this.categories.subscribe(val => this.dataSource.data = val);
  }
  reloadData() {
    this.categories = this.categoryService.getCategoryList();
    this.categories.subscribe(val => {
      this.dataSource.data = val;
      this.changeDetectorRefs.detectChanges();
    });
  }
  deleteCategory(id: string) {
    this.categoryService.deleteCategory(id).subscribe();
    this.reloadData();
  }
}
