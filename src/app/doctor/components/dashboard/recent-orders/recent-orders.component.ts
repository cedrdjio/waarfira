import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-recent-orders',
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  public recentOrders = chartData.recentOrders;
  public show : boolean = false
  constructor() { }

  toggle(){
    this.show = !this.show
  }
}
