import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent  implements OnInit {
  editProfile!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editProfile = this.fb.group({
      company: [''],
      userName: [''],
      email: ['', Validators.email],
      firstName: [''],
      lastName: [''],
      address: [''],
      city: [''],
      zipCode: [null],
      country: [''],
      about: ['']
    });
  }
}
