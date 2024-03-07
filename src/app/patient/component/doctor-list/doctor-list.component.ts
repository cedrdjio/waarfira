import { Component } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { product } from '../../../shared/data/ecommerce/products';
@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.scss',
})
export class DoctorListComponent {
  doctors = product;
}
