import { Component } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ITable } from '../../models/table.model';
import { TableComponent } from '../../components/table/table.component';
import { TableDetailsComponent } from '../../components/table-details/table-details.component';

@Component({
  selector: 'app-table-setter-page',
  standalone: true,
  imports: [DragDropModule, NzButtonModule, TableComponent, TableDetailsComponent],
  templateUrl: './table-setter-page.component.html',
  styleUrl: './table-setter-page.component.css'
})
export class TableSetterPageComponent {
  tables : ITable[] = [];
  selectedTable : ITable | null = null;

  addNewTable (type: 'square' | 'rectangle' | 'circle' | 'oval') {
    const data = {
      id: Date.now().toString(),
      name: this.getNextTableName(),
      type,
      seats: 4,
      position: {
        x: 50,
        y: 50
      }
    }

    this.tables.push(data);
    this.setSelectedTable(data);
  }

  getNextTableName () {
    const latestTable = this.tables[this.tables.length];

    if (latestTable && latestTable.name.includes('Table')) {
      return `Table ${Number(latestTable.name.split(' ')[1]) + 1}`
    }
    return `Table ${this.tables.length + 1}`;
  }


  handleDragEnd (event: CdkDragEnd) {
    const table: ITable = event.source.data;
    const point = event.source.getFreeDragPosition();
    this.tables = this.tables.map(item => item.id === table.id ? {...item, position: point} : item);
  }

  setSelectedTable (table: ITable | null) {
    this.selectedTable = table;
  }

  removeTable (table: ITable) {
    this.tables = this.tables.filter(item => item.id !== table.id);
    this.selectedTable = null;
  }
}
