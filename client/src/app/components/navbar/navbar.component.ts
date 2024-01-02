import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NzTypographyModule, NzButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
