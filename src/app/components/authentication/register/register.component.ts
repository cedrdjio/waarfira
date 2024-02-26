import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [FeatherIconsComponent,RouterModule,CommonModule]
})
export class RegisterComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

}
