import { DeletePhDialogComponent } from './../dialog/delete-ph-dialog/delete-ph-dialog.component';
import { PhService } from './../../../services/purchase-history/ph.service';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Ph } from './../../../models/ph';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ph-list',
  templateUrl: './ph-list.component.html',
  styleUrls: ['./ph-list.component.scss']
})
export class PhListComponent implements OnInit {

  phList: Ph[];

  displayedColumns: string[] = ['date', 'category', 'itemName', 'uom', 'qty', 'pricePerUnit', 'price', 'action'];
  dataSource = new MatTableDataSource();

  constructor(
    public phService: PhService,
    public dialog: MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.phService.refreshList();
    this.subscribeToList();
  }

  openDeleteDialog(ph: Ph): void {
    const dialogRef = this.dialog.open(DeletePhDialogComponent, {
      width: '250px',
      data: ph
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deletePh(result.id);
      this.phService.refreshList();
    });
  }


  deletePh(id: string) {
    this.phService.deletePh(id).subscribe();
    this.phService.refreshList();
  }

  subscribeToList() {
    this.phService.list$.subscribe(data => {
      this.dataSource.data = data;
    });
  }

}
