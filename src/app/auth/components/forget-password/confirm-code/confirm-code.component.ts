import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { AuthService } from '../../../../core/services/auth/auth.service';
import { OnlyNumbersDirective } from '../../../../shared/directives/only-numbers.directive';

@Component({
  selector: 'app-confirm-code',
  standalone: true,
  imports: [
    FeatherIconsComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    OnlyNumbersDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './confirm-code.component.html',
  styleUrl: './confirm-code.component.scss',
})
export class ConfirmCodeComponent implements OnInit {
  public show: boolean = false;
  public errorMessage: string = '';
  public confirmForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.confirmForm = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
    });
  }

  ngOnInit() {}
  onSubmit() {
    let code =
      this.confirmForm.value['field1'] +
      this.confirmForm.value['field1'] +
      this.confirmForm.value['field1'] +
      this.confirmForm.value['field1'];

    this.authService.verifyConfirmationCode(code).subscribe(
      (result) => {
        this.router.navigate(['/auth/new-password']);
      },
      (error) => {
        if (error.error.status) {
          this.errorMessage = error.error.message;
        }
        console.log(error);
      }
    );
  }
  showPassword() {
    this.show = !this.show;
  }
}

