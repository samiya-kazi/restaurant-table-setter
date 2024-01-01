import { Component, Input } from '@angular/core';
import { ITable } from '../../models/table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input() table! : ITable;


  getTableImg () {
    return '../../../assets/svg/' + this.table.type + '-' + this.table.seats + '.svg';
  }

}
