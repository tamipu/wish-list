import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  template: `
    <div class="form-group">
      <select
        id="filter"
        class="form-control"
        [(ngModel)]="filterCriteria"
        (ngModelChange)="filterChange.emit(filterCriteria)">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </select>
    </div>
  `,
  imports: [FormsModule],
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() filterCriteria: string = 'all';
  @Output() filterChange = new EventEmitter<string>();
}
