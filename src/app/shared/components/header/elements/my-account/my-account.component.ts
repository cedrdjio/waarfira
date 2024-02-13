import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { FeatherIconsComponent } from "../../../feather-icons/feather-icons.component";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent],
})
export class MyAccountComponent implements OnInit {
  public userName!: string;
  public profileImg!: "assets/images/dashboard/profile.jpg";

  constructor(public router: Router) {
    // if (JSON.parse(localStorage.getItem("user"))) {
    // } else {
    // }
  }

  ngOnInit() {}

  logoutFunc() {
    this.router.navigateByUrl('auth/login');
  }
}
