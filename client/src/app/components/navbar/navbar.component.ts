import { Component } from '@angular/core';
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzTypographyModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
