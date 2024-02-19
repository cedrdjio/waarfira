import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";

@Component({
    selector: 'app-followers-growth',
    standalone: true,
    templateUrl: './followers-growth.component.html',
    styleUrls: ['./followers-growth.component.scss'],
    imports: [NgApexchartsModule, FeatherIconsComponent]
})
export class FollowersGrowthComponent {

  public followersGrowth = chartData.followersGrowth;
  public show: boolean = false

  toggle() {
    this.show = !this.show
  }

}
