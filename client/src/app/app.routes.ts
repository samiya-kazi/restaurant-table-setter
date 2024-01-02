import { Routes } from '@angular/router';
import { TableSetterPageComponent } from './pages/table-setter-page/table-setter-page.component';
import { OrderStationComponent } from './pages/order-station/order-station.component';

export const routes: Routes = [
  { path: 'order', component: OrderStationComponent, pathMatch: 'full' },
  { path: 'table-setter', component: TableSetterPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/order'}
];
