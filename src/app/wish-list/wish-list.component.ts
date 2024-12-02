import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/module/wishItem';
import { WishItemComponent } from '../wish-item/wish-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  template: `
    <app-wish-item
      *ngFor="let item of items"
      [item]="item"
      (toggle)="toggle.emit(item)">
    </app-wish-item>
`,
  imports: [WishItemComponent, CommonModule],
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input() items: WishItem[] = [];
  @Output() toggle = new EventEmitter<WishItem>();
}
