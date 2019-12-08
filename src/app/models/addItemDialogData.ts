import { Observable } from 'rxjs';
import { Category } from './category';
import { Item } from './item';
import { Uom } from './uom';
import { Currency } from './currency';

export class AddItemDialogData {
    categories: Category[];
    uoms: Uom[];
    currencies: Currency[];
    item: Item;
}