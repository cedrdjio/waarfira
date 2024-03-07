import { Component } from '@angular/core';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [FeatherIconsComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  public reviews = [1, 2, 3, 4];
}
