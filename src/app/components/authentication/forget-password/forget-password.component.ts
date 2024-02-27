import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    FeatherIconsComponent,
    RouterModule,
    AuthCardComponent,
    CommonModule,
  ],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ForgetPasswordComponent implements OnInit {
  public show: boolean = false;

  constructor() {}

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }
}
