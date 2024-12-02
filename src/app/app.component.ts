import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/module/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
newWish: string = '';
items: WishItem[] = [
  new WishItem('New car'),
  new WishItem('Trip to Hawaii', true),
  new WishItem('Mansion in the Hamptons')
];
title = 'wishlist';
filterCriteria: string = 'all';
addWish() {
  if (this.newWish.trim()) {
    this.items.push({ name: this.newWish, isCompleted: false });
    this.newWish = '';
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
  toggleItem(item: { name: string, isCompleted: boolean }) {
    item.isCompleted = !item.isCompleted;
  }
}
