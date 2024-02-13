import { Component } from "@angular/core";
import * as chartData from "../../../../shared/data/dashboard/default";
import { NgApexchartsModule } from "ng-apexcharts";
import { FeatherIconsComponent } from "../../../../shared/components/feather-icons/feather-icons.component";

export interface Balance {
  icon: string;
  title: string;
  price: string;
  growth: string;
  colorClass: string;
  show?: boolean;
}
@Component({
  selector: "app-overall-balance",
  standalone: true,
  imports: [NgApexchartsModule, FeatherIconsComponent],
  templateUrl: "./overall-balance.component.html",
  styleUrls: ["./overall-balance.component.scss"],
})
export class OverallBalanceComponent {
  public overallBalance = chartData.overallBalance;

  constructor() {}

  ngOnInit(): void {}

  toggle(item: Balance) {
    item.show = !item.show;
  }

  public balance: Balance[] = [
    {
      icon: "income",
      title: "Income",
      price: "$22,678",
      growth: "+$456",
      colorClass: "success",
    },
    {
      icon: "expense",
      title: "Expense",
      price: "$12,057",
      growth: "+$256",
      colorClass: "danger",
    },
    {
      icon: "doller-return",
      title: "Cashback",
      price: "8,475",
      growth: "",
      colorClass: "success",
    },
  ];
}
