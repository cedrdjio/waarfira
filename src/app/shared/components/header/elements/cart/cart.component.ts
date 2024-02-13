import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../feather-icons/feather-icons.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterModule,FeatherIconsComponent],
})
export class CartComponent implements OnInit {

  public openCart: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // For Mobile Device
  toggleCart() {
    this.openCart = !this.openCart;
  }

}
