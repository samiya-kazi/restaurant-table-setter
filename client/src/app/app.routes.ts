import { Routes } from '@angular/router';
import { TableSetterPageComponent } from './pages/table-setter-page/table-setter-page.component';

export const routes: Routes = [
  { path: 'table-setter', component: TableSetterPageComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/table-setter'}
];
