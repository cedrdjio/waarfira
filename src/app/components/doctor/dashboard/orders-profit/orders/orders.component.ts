import { Component } from '@angular/core';
import * as chartData from '../../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  public orders = chartData.orders;

}
