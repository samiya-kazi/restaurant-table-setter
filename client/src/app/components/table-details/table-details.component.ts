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
  imports: [NzFormModule, NzInputModule, NzSliderModule, NzInputNumberModule, FormsModule, NzButtonComponent, NzIconModule],
  templateUrl: './table-details.component.html',
  styleUrl: './table-details.component.css'
})
export class TableDetailsComponent {

  @Input() selectedTable! : ITable | null;

  @Output() removeTableEvent = new EventEmitter<ITable>();
  @Output() deselectTableEvent = new EventEmitter();

  removeTable () {
    if (this.selectedTable) {
      this.removeTableEvent.emit(this.selectedTable);
    }
  }


  deselectTable () {
    if (this.selectedTable) {
      this.deselectTableEvent.emit();
    }
  }

}
