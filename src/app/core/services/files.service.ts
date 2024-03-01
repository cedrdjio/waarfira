import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http:HttpClient) {}

  getFileByName(fileName: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/files/${fileName}`);
  }

  getAllFiles(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/files`);
  }

  downloadFile(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/downloads`);
  }
}
