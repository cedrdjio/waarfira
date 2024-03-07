import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FeatherIconsComponent,RouterModule,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent  implements OnInit {

  public show: boolean = false;
  public errorMessage: string = '';
  public forgotForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.forgotForm = this.fb.group({
      field1: ['', Validators.required],

    });
  }


  ngOnInit() {

  }
  onSubmit() {
    let  email = this.forgotForm.value['email'];
    this.authService.sendForgotPasswordCode(email).subscribe(
      (result) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        if(error.error.status){
          this.errorMessage=error.error.message
        }
        console.log(error);
      }
    );
  } showPassword() {
    this.show = !this.show;
  }
}
