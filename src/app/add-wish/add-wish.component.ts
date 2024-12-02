import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-wish',
  standalone: true,
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          [(ngModel)]="newWish"
          placeholder="Enter your wish"
          name="newWishText"
        />
      </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary">Add Wish</button>
    </div>
    </form>
  `,
  imports: [FormsModule],
  styleUrls: ['./add-wish.component.css']
})
export class AddWishComponent {
  @Output() wishAdded = new EventEmitter<string>();
  newWish: string = '';

  onSubmit() {
    if (this.newWish.trim()) {
      this.wishAdded.emit(this.newWish);
      this.newWish = '';
    }
  }
}
