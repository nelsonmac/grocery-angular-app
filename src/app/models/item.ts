import { Category } from './category';
import { Currency } from './currency';
import { Uom } from './uom';

export class Item {
    id: string;
    name: string;
    category: Category;
    uom: Uom;
    currency: Currency;
    defaultQty: number;
    pricePerUnit: number;
}