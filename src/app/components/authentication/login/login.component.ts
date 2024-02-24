import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [FeatherIconsComponent,RouterModule,CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }
}
