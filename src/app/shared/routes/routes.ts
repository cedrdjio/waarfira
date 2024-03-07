import { Routes } from '@angular/router';
import { DashboardComponent } from '../../doctor/components/dashboard/dashboard.component';
import { DoctorListComponent } from '../../patient/component/doctor-list/doctor-list.component';
import { ProfileComponent } from '../../users/components/profile/profile.component';

export const content: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  { path: 'Doctor-List', component: DoctorListComponent },
  { path: 'Profile', component: ProfileComponent },
];
