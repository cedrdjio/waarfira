import { Routes } from '@angular/router';
import { DashboardComponent } from '../../doctor/components/dashboard/dashboard.component';
import { DoctorListComponent } from '../../patient/components/doctor-list/doctor-list.component';
import { AccountComponent } from '../../doctor/components/account/account.component';
import { AppointmentComponent } from '../../doctor/components/appointment/appointment.component';
import { ChatsComponent } from '../../doctor/components/chats/chats.component';

export const content: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  { path: 'doctor-List', component: DoctorListComponent },
  { path: 'account', component: AccountComponent },
  { path: 'chat', component: ChatsComponent },
  { path: 'appointment', component: AppointmentComponent },


];
