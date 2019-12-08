import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule,
   MatListModule, MatButtonModule, MatDialogModule, MatGridListModule, MatCardModule, MatSelectModule, MatButton } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UomListComponent } from './components/master/uom/uom-list/uom-list.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterseptorService } from './services/httpinterseptor.service';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { EditDialogComponent } from './components/master/uom/dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './components/master/uom/dialog/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './components/master/uom/dialog/add-dialog/add-dialog.component';
import { MenuListItemComponent } from './components/menu/menu-list-item/menu-list-item.component';
import { CategoryListComponent } from './components/master/category/category-list/category-list.component';
import { CurrencyListComponent } from './components/master/currency/currency-list/currency-list.component';
import { AddCurrencyDialogComponent } from './components/master/currency/dialog/add-currency-dialog/add-currency-dialog.component';
import { DeleteCurrencyDialogComponent } from './components/master/currency/dialog/delete-currency-dialog/delete-currency-dialog.component';
import { EditCurrencyDialogComponent } from './components/master/currency/dialog/edit-currency-dialog/edit-currency-dialog.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';
import { AddItemDialogComponent } from './components/item/dialog/add-item-dialog/add-item-dialog.component';
import { PhHomeComponent } from './components/purchase-history/ph-home/ph-home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddPhComponent } from './components/purchase-history/add-ph/add-ph.component';
import { PhListComponent } from './components/purchase-history/ph-list/ph-list.component';
import { DeletePhDialogComponent } from './components/purchase-history/dialog/delete-ph-dialog/delete-ph-dialog.component';
import { PhCategoryChartComponent } from './components/purchase-history/ph-category-chart/ph-category-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UomListComponent,
    LoginComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    MenuListItemComponent,
    CategoryListComponent,
    CurrencyListComponent,
    AddCurrencyDialogComponent,
    DeleteCurrencyDialogComponent,
    EditCurrencyDialogComponent,
    ItemListComponent,
    AddItemDialogComponent,
    PhHomeComponent,
    AddPhComponent,
    PhListComponent,
    DeletePhDialogComponent,
    PhCategoryChartComponent,
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent,
    AddCurrencyDialogComponent,
    DeleteCurrencyDialogComponent,
    EditCurrencyDialogComponent,
    AddItemDialogComponent,
    DeletePhDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterseptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
