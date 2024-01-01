import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITable } from '../../models/table.model';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-table-details',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzSliderModule,
    NzInputNumberModule,
    FormsModule,
    NzButtonComponent,
    NzIconModule,
  ],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.css',
})
export class TableDetailsComponent {
  @Input() selectedTable!: ITable | null;

  @Output() removeTableEvent = new EventEmitter<ITable>();
  @Output() deselectTableEvent = new EventEmitter();

  removeTable() {
    if (this.selectedTable) {
      this.removeTableEvent.emit(this.selectedTable);
    }
  }

  deselectTable() {
    if (this.selectedTable) {
      this.deselectTableEvent.emit();
    }
  }

  getMinSeats() {
    switch (this.selectedTable && this.selectedTable.type) {
      case 'square':
        return 2;
      case 'circle':
        return 2;
      case 'rectangle':
        return 4;
      case 'oval':
        return 4;
      default:
        return 2;
    }
  }

  getMaxSeats() {
    switch (this.selectedTable && this.selectedTable.type) {
      case 'square':
        return 4;
      case 'circle':
        return 4;
      case 'rectangle':
        return 8;
      case 'oval':
        return 8;
      default:
        return 4;
    }
  }
}
