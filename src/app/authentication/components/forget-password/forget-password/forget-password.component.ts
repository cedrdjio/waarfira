import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../../shared/components/feather-icons/feather-icons.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [FeatherIconsComponent,RouterModule,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent  implements OnInit {

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
  // } showPassword() {
  //   this.show = !this.show;
  // }
}
