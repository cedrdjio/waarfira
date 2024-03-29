import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [FeatherIconsComponent,RouterModule,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.scss'
})
export class NewPasswordComponent implements OnInit {

  public show: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  // onSubmit() {
  //   var email = this.loginForm.value['email'];
  //   var password = this.loginForm.value['password'];

  //   this.authService.login(email, password).subscribe(
  //     (result) => {
  //       this.authService.setAccessToken(result);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     (error) => {
  //       if(error.error.status){
  //         this.errorMessage=error.error.message
  //       }
  //       console.log(error);
  //     }
  //   );
  // }
  showPassword() {
    this.show = !this.show;
  }
}
