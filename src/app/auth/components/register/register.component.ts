import { Component, OnInit } from '@angular/core';
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [
      FeatherIconsComponent,
      RouterModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],})
export class RegisterComponent implements OnInit {

  public show: boolean = false;
  public errorMessage: string = '';
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  ngOnInit() {
  }
  onSubmit() {
    var email = this.registerForm.value['email'];
    var password = this.registerForm.value['password'];

    this.authService.register(email, password).subscribe(
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
