import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ITable } from '../../models/table.model';
import { TableDetailsComponent } from '../../components/table-details/table-details.component';
import { CoreShapeComponent, NgKonvaEventObject, StageComponent } from 'ng2-konva';
import { StageConfig } from 'konva/lib/Stage';
import { ImageConfig } from 'konva/lib/shapes/Image';

@Component({
  selector: 'app-table-setter-page',
  standalone: true,
  imports: [NzButtonModule, TableDetailsComponent, StageComponent, CoreShapeComponent],
  templateUrl: './table-setter-page.component.html',
  styleUrl: './table-setter-page.component.css'
})
export class TableSetterPageComponent {
  tables : {info: ITable, config: Partial<ImageConfig>}[] = [];
  selectedTable : {info: ITable, config: Partial<ImageConfig>} | null = null;

  public configStage: Partial<StageConfig> = {
    width: 1000,
    height: 500,
  };

  addNewTable (type: 'square' | 'rectangle' | 'circle' | 'oval') {
    const id = Date.now().toString();
    const seats = 4;

    const data = {
      info: {
        id,
        name: this.getNextTableName(),
        type,
        seats,
        position: {
          x: 50,
          y: 50,
          rotation: 0
        }
      },
      config: {
        image: this.getImage(type, seats),
        draggable: true,
        name: id,
        rotation: 0
      }
    }

    this.tables.push(data);
    this.setSelectedTable(data);
  }

  getNextTableName () {
    const latestTable = this.tables[this.tables.length];

    if (latestTable && latestTable.info.name.includes('Table')) {
      return `Table ${Number(latestTable.info.name.split(' ')[1]) + 1}`
    }
    return `Table ${this.tables.length + 1}`;
  }

  getImage (type: string, seats: number) {
    const image = new window.Image();
    image.src = '../../../assets/svg/' + type + '-' + seats + '.svg';
    return image;
  }


  handleDragEnd (konvaEvent: NgKonvaEventObject<MouseEvent>) {
    const tableId = konvaEvent.event.target.name();
    const x = konvaEvent.event.target.x();
    const y = konvaEvent.event.target.y();

    this.tables = this.tables.map(item => item.info.id === tableId ? {info: {...item.info,  position: { ...item.info.position, x, y }}, config: {...item.config, x, y}} : item);

    const updateTableIndex = this.tables.findIndex(item => item.info.id === tableId);
    this.selectedTable = this.tables[updateTableIndex];
  }

  setSelectedTable (table: {info: ITable, config: Partial<ImageConfig>} | null) {
    this.selectedTable = table;
  }

  removeTable (table: ITable) {
    this.tables = this.tables.filter(item => item.info.id !== table.id);
    this.selectedTable = null;
  }

  updateTable (table: ITable) {
    this.tables = this.tables.map(item => {
      if (item.info.id === table.id) {
        const updatedItem = {
          info: table,
          config: {
            ...item.config,
            image: this.getImage(table.type, table.seats),
            x: table.position.x,
            y: table.position.y,
            rotation: table.position.rotation
          }
        }

        return updatedItem;
      } else return item;
    })
  }
}
