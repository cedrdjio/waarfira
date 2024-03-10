import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MyProfileComponent } from "../../../doctor/components/account/tabs/my-profile/my-profile.component";
import { PasswordComponent } from "../../../doctor/components/account/tabs/password/password.component";
import { ReviewComponent } from "../../../doctor/components/account/tabs/review/review.component";


@Component({
    selector: 'app-simple-tab',
    standalone: true,
    templateUrl: './simple-tab.component.html',
    styleUrls: ['./simple-tab.component.scss'],
    imports: [
        CommonModule,
        RouterLink,
        NgbNav,
        NgbNavModule,
        MyProfileComponent,
        PasswordComponent,
        ReviewComponent
    ]
})
export class SimpleTabComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
