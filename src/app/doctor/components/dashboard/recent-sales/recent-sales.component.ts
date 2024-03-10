import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-recent-sales',
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: './recent-sales.component.html',
  styleUrls: ['./recent-sales.component.scss']
})
export class RecentSalesComponent {

  public show: boolean = false
  constructor() {}

  toggle(){
    this.show = !this.show
  }

  public recentSalesList = [
    {
      profile: "assets/images/dashboard/user/14.jpg",
      name: "Jane Cooper",
      time: "10 minutes ago",
      sales: "200.00"
    },
    {
      profile: "assets/images/dashboard/user/14.jpg",
      name: "Brooklyn Simmons",
      time: "19 minutes ago",
      sales: "970.00"
    },
    {
      profile: "assets/images/dashboard/user/14.jpg",
      name: "Leslie Alexander",
      time: "2 hours ago",
      sales: "300.00"
    },
    {
      profile: "assets/images/dashboard/user/14.jpg",
      name: "Travis Wright",
      time: "8 hours ago",
      sales: "450.00"
    },
    {
      profile: "assets/images/dashboard/user/14.jpg",
      name: "Mark Green",
      time: "1 day ago",
      sales: "768.00"
    },

  ]
}
