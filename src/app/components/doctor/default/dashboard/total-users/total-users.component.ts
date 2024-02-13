import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-total-users',
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.scss']
})
export class TotalUsersComponent {

  public show: boolean = false

  toggle() {
    this.show = !this.show
  }
}
