import { Component, OnInit } from '@angular/core';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import * as data from '../../../shared/data/dashboard/default';
import { PaperNoteComponent } from './paper-note/paper-note.component';
import { FollowersGrowthComponent } from './followers-growth/followers-growth.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PurchaseAccountComponent } from './purchase-account/purchase-account.component';
import { RecentSalesComponent } from './recent-sales/recent-sales.component';
import { OverallBalanceComponent } from './overall-balance/overall-balance.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { ActivityComponent } from './activity/activity.component';
import { OrdersProfitComponent } from './orders-profit/orders-profit.component';
import { ProductStatusChartBoxComponent } from './product-status-chart-box/product-status-chart-box.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [
    PaperNoteComponent,
    FollowersGrowthComponent,
    TotalUsersComponent,
    TimelineComponent,
    PurchaseAccountComponent,
    RecentSalesComponent,
    OverallBalanceComponent,
    RecentOrdersComponent,
    ActivityComponent,
    OrdersProfitComponent,
    ProductStatusChartBoxComponent,
    WelcomeComponent,
    BreadcrumbComponent,
  ],
})
export class DashboardComponent implements OnInit {
  constructor(calendar: NgbCalendar) {}

  ngOnInit() {}

  public purchase = data.purchase;
  public salesReturn = data.salesReturn;
  public sales = data.sales;
  public purchaseRate = data.purchaseRate;
}
