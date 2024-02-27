import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthCardComponent } from '../../../shared/components/auth-card/auth-card.component';

@Component({
  selector: 'app-status-check',
  standalone: true,
  imports: [CommonModule, FormsModule, AuthCardComponent],
  templateUrl: './status-check.component.html',
  styleUrl: './status-check.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StatusCheckComponent {}
