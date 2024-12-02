import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/module/wishItem';

@Component({
  selector: 'app-wish-item',
  standalone: true,
    template: `
    <li>
      <div class="form-check">
        <label class="form-check-label">
          <input
            class="form-check-input"
            type="checkbox"
            [checked]="item.isCompleted"
            (click)="onToggle()"
          />
          {{ item.name }}
        </label>
      </div>
    </li>
  `,
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent {
  @Input() item!: WishItem;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }
}
