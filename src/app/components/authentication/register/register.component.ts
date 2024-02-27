import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  imports: [
    FeatherIconsComponent,
    RouterModule,
    CommonModule,
    AuthCardComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegisterComponent implements OnInit {
  public show: boolean = false;

  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }
}
