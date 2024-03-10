import { CommonModule } from "@angular/common";
import { Component, OnInit, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { FeatherIconsComponent } from "../../../feather-icons/feather-icons.component";
import { AuthService } from "../../../../../core/services/auth/auth.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
  standalone: true,
  imports: [CommonModule, RouterModule, FeatherIconsComponent],
})
export class MyAccountComponent implements OnInit {
  public userName!: string;
  public initial: string | null = null;
  public role: string | null = null;
  public profileImg!: "assets/images/dashboard/profile.jpg";
  authService = inject(AuthService);

  constructor(public router: Router) {
    // if (JSON.parse(localStorage.getItem("user"))) {
    // } else {
    // }
    this.authService.getLoggedInUser().subscribe(
      (result) => {
        this.initial = result.login.substring(0, 2);
        this.userName = result.login;
        this.role = result.type;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

  logoutFunc() {
    this.router.navigateByUrl('auth/login');
  }
}
