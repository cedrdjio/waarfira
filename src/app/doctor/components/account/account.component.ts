import { Component } from '@angular/core';
import { SimpleTabComponent } from "../../../shared/components/simple-tab/simple-tab.component";
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";

@Component({
    selector: 'app-account',
    standalone: true,
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss',
    imports: [SimpleTabComponent, FeatherIconsComponent]
})
export class AccountComponent {
  tabs = [
    { title: 'My Profile', route: '/my-profile' },
    { title: 'Password', route: '/profile-password' },
  ];
}
