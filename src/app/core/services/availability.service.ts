import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Availability } from '../models/availability';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class AvailabilityService {

  constructor(private http: HttpClient) {}

  private buildFormData(date: string, time: string): FormData {
    const formData = new FormData();
    formData.append('date', date);
    formData.append('time', time);
    return formData;
  }

  creatAvailability(date: string, time: string): Observable<Availability> {
    const formData = this.buildFormData(date, time);
    return this.http.post<Availability>(
      `${environment.baseUrl}/availabilities`, formData);
  }

  getAvailability(reference: string): Observable<Availability> {
    return this.http.get<Availability>(
      `${environment.baseUrl}/availabilities/${reference}`
    );
  }

  updateAvailability(reference: string, date: string, time: string): Observable<Availability> {
    const formData = this.buildFormData(date, time);
    return this.http.post<Availability>(
      `${environment.baseUrl}/availabilities/${reference}`, formData);
  }

  deleteAvailability(reference: string): Observable<void> {
    return this.http.delete<void>(
      `${environment.baseUrl}/availabilities/${reference}`
    );
  }

  getAvailabilitiesByDoctor(doctorId: string, monthNumber: number, year: number): Observable<Page<Availability>> {
    const params = new HttpParams()
      .set('month_number', monthNumber.toString())
      .set('year', year.toString());
    return this.http.get<Page<Availability>>(
      `${environment.baseUrl}/availabilities/doctor/${doctorId}`, { params });
  }

  getDoctorAvailability(reference: string): Observable<Page<Availability>> {
    return this.http.get<Page<Availability>>(
      `${environment.baseUrl}/availabilities/doctor/${reference}`
    );
  }
}
