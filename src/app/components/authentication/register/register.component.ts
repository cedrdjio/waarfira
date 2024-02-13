import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [FeatherIconsComponent,RouterModule]
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
