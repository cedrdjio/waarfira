import { Component, Input, Output, ViewChild, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import * as data from '../../../shared/data/dashboard/default';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import feather from 'feather-icons';
import { BreadcrumbComponent } from "../../../shared/components/breadcrumb/breadcrumb.component";
import { APPOINTMENTS, Appointment } from '../../../shared/data/tables/product-list';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatherIconsComponent } from '../../../shared/components/feather-icons/feather-icons.component';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs';

@Component({
    selector: 'app-appointment',
    standalone: true,
    templateUrl: './appointment.component.html',
    styleUrl: './appointment.component.scss',
    imports: [
      FeatherIconsComponent,
      RouterModule,
      CommonModule,
      FormsModule,
      BreadcrumbComponent,
      ReactiveFormsModule,
    ],
})
export class AppointmentComponent {
  public appointments = APPOINTMENTS;
  openSidebar: boolean = false;

  searchSig = signal<string>('');
  appointment$ = toObservable(this.searchSig).pipe(
    debounceTime(300),
    distinctUntilChanged(),
    map((searchValue) => {
      return this.appointments.filter(appointment => appointment.name.includes(searchValue));
    })
  );
  appointmentsSig = toSignal(this.appointment$);


  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSig.set(value);
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  truncateDescription(description: string): string {
    if (description.length > 40) {
      return description.substring(0, 40) + '...';
    }
    return description;
  }
}
