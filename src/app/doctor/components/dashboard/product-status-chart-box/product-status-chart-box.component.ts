import { Component, Input } from "@angular/core";

@Component({
  selector: "app-product-status-chart-box",
  standalone: true,
  imports: [],
  templateUrl: "./product-status-chart-box.component.html",
  styleUrls: ["./product-status-chart-box.component.scss"],
})
export class ProductStatusChartBoxComponent {

  @Input() data: any


  constructor() {}
}
