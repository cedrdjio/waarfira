import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {
  AvailabilityInterface,
  AvailabilityResponseInterface,
  UpdateAvailabilityInterface,
} from '../../models/availability';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityServiceService {
  private http = inject(HttpClient);
  constructor() {}

  creatAvailability(
    schema: AvailabilityInterface
  ): Observable<AvailabilityResponseInterface> {
    const formData = new FormData();
    formData.append('date', schema.date);
    formData.append('times', new Blob([JSON.stringify(schema.times)]));
    return this.http.post<AvailabilityResponseInterface>(
      `${environment.baseUrl}/availabilty`,
      schema
    );
  }

  getAvailability(
    reference: string
  ): Observable<AvailabilityResponseInterface> {
    return this.http.get<AvailabilityResponseInterface>(
      `${environment.baseUrl}/availabilities/${reference}`
    );
  }

  updateAvailability(
    reference: string,
    schema: UpdateAvailabilityInterface
  ): Observable<AvailabilityResponseInterface> {
    const formData = new FormData();
    formData.append('date', schema.date);
    formData.append('time', schema.time);
    formData.append('reference', schema.reference);
    return this.http.put<AvailabilityResponseInterface>(
      `${environment.baseUrl}/availabilities/${reference}`,
      schema
    );
  }

  deleteAvailability(reference: string) {
    return this.http.delete(
      `${environment.baseUrl}/availabilities/${reference}`
    );
  }

  getDoctorAvailability(
    reference: string
  ): Observable<AvailabilityResponseInterface[]> {
    return this.http.get<AvailabilityResponseInterface[]>(
      `${environment.baseUrl}/availabilities/doctor/${reference}`
    );
  }
}
