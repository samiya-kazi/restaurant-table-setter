import { Component, Input, OnInit } from '@angular/core';
import { ITable } from '../../models/table.model';
import { CoreShapeComponent } from 'ng2-konva';
import { ImageConfig } from 'konva/lib/shapes/Image';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CoreShapeComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  ngOnInit(): void {
    this.image.src = this.getTableImg();
  }

  @Input() table! : ITable;

  image = new window.Image();

  config : Partial<ImageConfig> = {
    image: this.image,
    draggable: true,
  }

  getTableImg () {
    return '../../../assets/svg/' + this.table.type + '-' + this.table.seats + '.svg';
  }

}
