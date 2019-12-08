import { PhListComponent } from './../ph-list/ph-list.component';
import { PhService } from './../../../services/purchase-history/ph.service';
import { Ph } from './../../../models/ph';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item/item.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/auth.service';

@Component({
  selector: 'app-add-ph',
  templateUrl: './add-ph.component.html',
  styleUrls: ['./add-ph.component.scss']
})
export class AddPhComponent implements OnInit {

  items: Item[];
  purchase: Ph;
  itemSelected;
  selectedItem: Item;
  phListComponent: PhListComponent;

  constructor(
    public itemService: ItemService,
    public authService: AuthService,
    public phService: PhService,
    ) { }

  ngOnInit() {
    this.itemService.getItemList().subscribe(response => {
      this.items = response;
    });
    this.purchase = new Ph();
    this.purchase.item = new Item();
    this.purchase.user = this.authService.getLoggedInUser();
    this.selectedItem = new Item();
    this.selectedItem.pricePerUnit = 0;
    console.log(this.purchase.user);
  }

  onSelectItem(selectedOption: Item) {
    this.selectedItem = selectedOption;
    this.purchase.item.pricePerUnit = selectedOption.pricePerUnit;
    this.purchase.qty = selectedOption.defaultQty;
  }

  registerPurchase(purchasedItem: Ph) {
    purchasedItem.price = purchasedItem.item.pricePerUnit * purchasedItem.qty;
    this.phService.addPh(purchasedItem).subscribe(response => {
      this.phService.refreshList();
    });
  }

}
