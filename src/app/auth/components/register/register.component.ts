import { Component, OnInit, inject } from '@angular/core';
import { FeatherIconsComponent } from "../../../shared/components/feather-icons/feather-icons.component";
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { User } from '../../../core/models/user';
import { UserType } from '../../../core/constant/userType';
import { switchMap, of, tap, catchError, finalize, throwError, forkJoin } from 'rxjs';
import { UsersStore } from '../../../core/constant/stores/userStore';

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
    ],
    providers: [UsersStore],
  })
    export class RegisterComponent  {

   show: boolean = false;
   errorMessage: string = '';
   registerForm: FormGroup;
   user!: User;
   userType = UserType;

   private fb =  inject(FormBuilder);
   private router=  inject(Router);
   private authService=  inject(AuthService);
   private userStore = inject(UsersStore);


  constructor() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      specialization: ['', Validators.required],

    });
    console.log('init user store');
    console.log(this.userStore.loadUser());
    console.log('user store');
    console.log(this.userStore.user());
  }



  onSubmit() {
    let email = this.registerForm.value['email'];
    let password = this.registerForm.value['password'];
    let specialization = this.registerForm.value['specialization'];
    // this.authService.getLoggedInUser().subscribe(
    //   (result) => {
    //     this.userStore.storeUser(result);
    //     console.log('user store');
    //     console.log(this.userStore.user());

    //     // this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    this.authService.register(email, password, specialization)
    .pipe(
      switchMap((result) => {
        if (!result) {
          return throwError('Échec de l\'inscription');
        }
        console.log('Inscription réussie:', result);
        const token = result;
        return forkJoin([
          this.authService.setAccessToken(token),
          this.authService.getLoggedInUser()
        ]);
      }),
      tap((user) => {
        if (user) {
          console.log('Utilisateur connecté:', user);
        }
      }),
      catchError((error) => {
        if (error.error?.status) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'Une erreur est survenue';
        }
        console.error('Erreur d\'inscription:', error);
        return throwError(this.errorMessage);
      }),
      finalize(() => {
        this.router.navigate(['/home']);
      })
    )
    .subscribe();
}

  showPassword() {
    this.show = !this.show;
  }

}
