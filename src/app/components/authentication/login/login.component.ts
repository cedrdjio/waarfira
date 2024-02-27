import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';
import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FeatherIconsComponent,
    RouterModule,
    AuthCardComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }
}
