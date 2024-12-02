import { Component } from '@angular/core';
import { WishItem } from '../shared/module/wishItem';
import { FilterComponent } from './filter/filter.component';
import { AddWishComponent } from './add-wish/add-wish.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterComponent, AddWishComponent, WishListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('New car'),
    new WishItem('Trip to Hawaii', true),
    new WishItem('Mansion in the Hamptons')
  ];
  filterCriteria: string = 'all';

  addWish(newWish: string) {
    if (newWish.trim()) {
      this.items.push({ name: newWish, isCompleted: false });
    }
  }

  getFilteredItems() {
    if (this.filterCriteria === 'completed') {
      return this.items.filter(item => item.isCompleted);
    } else if (this.filterCriteria === 'notCompleted') {
      return this.items.filter(item => !item.isCompleted);
    } else {
      return this.items;
    }
  }

  toggleItem(item: WishItem) {
    item.isCompleted = !item.isCompleted;
  }
}
