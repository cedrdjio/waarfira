import { Component } from '@angular/core';
import * as chartData from '../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from 'ng-apexcharts';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  public timeLine = chartData.timeLine;
  public show: boolean = false

  constructor() { }

  toggle() {
    this.show = !this.show
  }
}
