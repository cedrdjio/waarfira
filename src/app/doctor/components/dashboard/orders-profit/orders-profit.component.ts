import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { OrdersComponent } from "./orders/orders.component";

@Component({
    selector: 'app-orders-profit',
    standalone: true,
    templateUrl: './orders-profit.component.html',
    styleUrls: ['./orders-profit.component.scss'],
    imports: [NgApexchartsModule, FeatherIconsComponent, OrdersComponent]
})
export class OrdersProfitComponent {

  constructor(){}
  public profit = chartData.profit

}
