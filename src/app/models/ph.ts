import { User } from './user';
import { Item } from './item';
export class Ph {
    id: string;
    item: Item;
    price: number;
    user: User;
    datetime: Date;
    qty: number;
}
