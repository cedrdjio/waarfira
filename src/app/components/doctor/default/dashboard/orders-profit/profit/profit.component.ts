import { Component, Input } from "@angular/core";
import * as chartData from '../../../../../shared/data/dashboard/default'
import { NgApexchartsModule } from "ng-apexcharts";
import { FeatherIconsComponent } from "../../../../../shared/components/feather-icons/feather-icons.component";

@Component({
  selector: "app-profit",
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: "./profit.component.html",
  styleUrls: ["./profit.component.scss"],
})
export class ProfitComponent {

  public profit = chartData.profit

  constructor() {}

}
