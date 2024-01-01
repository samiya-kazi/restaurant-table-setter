import { Component } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ITable } from '../../models/table.model';

@Component({
  selector: 'app-table-setter-page',
  standalone: true,
  imports: [DragDropModule, NzButtonModule],
  templateUrl: './table-setter-page.component.html',
  styleUrl: './table-setter-page.component.css'
})
export class TableSetterPageComponent {
  tables : ITable[] = [];

  addNewTable (type: 'square' | 'rectangle' | 'circle' | 'oval') {
    const data = {
      id: Date.now().toString(),
      name: `Table ${this.tables.length + 1}`,
      type,
      seats: 4,
      position: {
        x: 50,
        y: 50
      }
    }

    this.tables.push(data);
  }


  handleDragEnd (event: CdkDragEnd) {
    console.log(event);
    const table: ITable = event.source.data;
    const point = event.source.getFreeDragPosition();
    console.log(point);
    this.tables = this.tables.map(item => item.id === table.id ? {...item, position: point} : item);
    console.log(this.tables);
  }


}
