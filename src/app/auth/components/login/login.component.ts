import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    FeatherIconsComponent,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public errorMessage: string = '';
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() { }


  onSubmit() {
    var email = this.loginForm.value['email'];
    var password = this.loginForm.value['password'];

    this.authService.login(email, password).subscribe(
      (result) => {
        this.authService.setAccessToken(result);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        if(error.error.status){
          this.errorMessage=error.error.message
        }
        console.log(error);
      }
    );
  }

  showPassword() {
    this.show = !this.show;
  }
}
