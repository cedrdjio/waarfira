import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTabComponent } from '../../../shared/components/simple-tab/simple-tab.component';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, SimpleTabComponent, FeatherIconsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  tabs = [
    { title: 'My Profile', route: '/my-profile' },
    { title: 'Password', route: '/profile-password' },
  ];
}
