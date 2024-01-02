import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITable } from '../../models/table.model';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ImageConfig } from 'konva/lib/shapes/Image';

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
  @Input() selectedTable!: {info: ITable, config: Partial<ImageConfig>} | null;

  @Output() removeTableEvent = new EventEmitter<ITable>();
  @Output() deselectTableEvent = new EventEmitter();
  @Output() updateTableEvent = new EventEmitter<ITable>();

  removeTable() {
    if (this.selectedTable) {
      this.removeTableEvent.emit(this.selectedTable.info);
    }
  }

  deselectTable() {
    if (this.selectedTable) {
      this.deselectTableEvent.emit();
    }
  }

  getMinSeats() {
    switch (this.selectedTable && this.selectedTable.info.type) {
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
    switch (this.selectedTable && this.selectedTable.info.type) {
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

  getStepSize () {
    switch (this.selectedTable && this.selectedTable.info.type) {
      case 'square':
        return 1;
      case 'circle':
        return 1;
      case 'rectangle':
        return 2;
      case 'oval':
        return 2;
      default:
        return 1;
    }
  }

  rotateTable (direction: 'clockwise' | 'anti-clockwise') {
    if (this.selectedTable) {
      const current = this.selectedTable.info.position.rotation ?? 0;
      let newRotation : number;

      if (direction === 'clockwise') 
        newRotation = (current + 45) >= 360 ? 0 : (current + 45);
      else
        newRotation = (current - 45) < 0 ? 315 : (current - 45);

      this.selectedTable.info.position.rotation = newRotation;
      this.updateTable(this.selectedTable.info);
    }
  }

  updateTable (table: ITable) {
    this.updateTableEvent.emit(table);
  }
}
