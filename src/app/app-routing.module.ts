import { PhHomeComponent } from './components/purchase-history/ph-home/ph-home.component';
import { CategoryListComponent } from './components/master/category/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UomListComponent } from './components/master/uom/uom-list/uom-list.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyListComponent } from './components/master/currency/currency-list/currency-list.component';
import { ItemListComponent } from './components/item/item-list/item-list.component';



const routes: Routes = [
  //uom
  {path: 'uom-list', component: UomListComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'currency-list', component: CurrencyListComponent},
  {path: 'item-list', component: ItemListComponent},
  {path: 'ph-home', component: PhHomeComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule,
    ]
})
export class AppRoutingModule { }
