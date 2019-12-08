import { AddDialogComponent } from '../dialog/add-dialog/add-dialog.component';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { UomService } from '../../../../services/uom.service';
import { Uom } from '../../../../models/uom';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { EditDialogComponent } from '../dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../dialog/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  styleUrls: ['./uom-list.component.scss']
})

export class UomListComponent implements OnInit {

  uoms: Observable<Uom[]>;

  displayedColumns: string[] = ['name', 'description', 'action'];
  dataSource = new MatTableDataSource();

  constructor(private uomService: UomService, public dialog: MatDialog, private changeDetectorRefs: ChangeDetectorRef) { }

  openDeleteDialog(uom: Uom): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: uom
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteUom(result.id);
      this.reloadData();
    });
  }

  openEditDialog(uom: Uom): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: uom
    });

    dialogRef.afterClosed().subscribe(result => {
      this.uomService.addUom(result).subscribe();
      console.log(this.uoms);
      this.reloadData();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '250px',
      data: new Uom()
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.uomService.addUom(result).subscribe(response => {
        this.reloadData();
      });
    });
  }

  ngOnInit() {
    this.reloadData();
    this.uoms.subscribe(val => this.dataSource.data = val);
  }

  reloadData() {
    this.uoms = this.uomService.getUomList();
    this.uoms.subscribe(val => {
      this.dataSource.data = val;
      this.changeDetectorRefs.detectChanges();
    });
  }

  deleteUom(id: string) {
    this.uomService.deleteUom(id).subscribe();
    this.reloadData();
  }
}
