import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  AccessToken,
  UpdateUsersResponse,
  UpdatedUser,
  User,
} from '../../models/users';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);
  constructor() {}

  creatUsers(userSchema: User): Observable<AccessToken> {
    const formData = new FormData();
    formData.append('password', userSchema.password);
    formData.append('username', userSchema.username);
    return this.http.post<AccessToken>(
      `${environment.baseUrl}/users`,
      formData
    );
  }
  userLogin(userSchema: User): Observable<AccessToken> {
    const formData = new FormData();
    formData.append('password', userSchema.password);
    formData.append('username', userSchema.username);
    return this.http.post<AccessToken>(
      `${environment.baseUrl}/users/login`,
      formData
    );
  }
  updateUsers(updateSchema: UpdatedUser): Observable<UpdateUsersResponse> {
    const formdata = new FormData();
    formdata.append('avatar', updateSchema.avatar);
    formdata.append('email', updateSchema.email);
    formdata.append('first_name', updateSchema.first_name);
    formdata.append('last_name', updateSchema.last_name);
    formdata.append('birthday', updateSchema.birthday);
    formdata.append('last_name', updateSchema.last_name);
    formdata.append('gender', updateSchema.gender);
    formdata.append('telephone', updateSchema.telephone);
    return this.http.put<UpdateUsersResponse>(
      `${environment.baseUrl}/users`,
      formdata
    );
  }
  /**
   *resend verification code
   */
  resendCode(): Observable<any> {
    return this.http.get<any>(
      `${environment.baseUrl}​/users​/contacts​/resend-code`
    );
  }
  /**
   *verify account code
   */
  verifyAccount(code: string): Observable<any> {
    const formData = new FormData();
    formData.append('code', code);
    return this.http.post<any>(
      `${environment.baseUrl}/users/contacts/verify`,
      formData
    );
  }
  /**
   * confirm new password
   */
  confirmNewPassword(code: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('code', code);
    formData.append('password', password);
    return this.http.post<any>(
      `${environment.baseUrl}/users/forgot-password`,
      formData
    );
  }
  /**
   * confirm forgot password code
   */
  confirmRecoveryCode(code: string): Observable<any> {
    const formData = new FormData();
    formData.append('code', code);
    return this.http.post<any>(
      `${environment.baseUrl}/users/forgot-password/confirm-code`,
      formData
    );
  }
  /**
   * get loggedIn User
   */
  userProfile(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/users`);
  }
  /**
   * send forgot password code
   */
  sendAccountRecoveryCode(username: string): Observable<any> {
    const formData = new FormData();
    formData.append('username', username);
    return this.http.post<any>(
      `${environment.baseUrl}/users/forgot-password/send-code`,
      formData
    );
  }
  /**
   * update user specialization
   */
  specialiseAccount(specilization: string): Observable<any> {
    const formData = new FormData();
    formData.append('specialization', specilization);
    return this.http.put<any>(
      `${environment.baseUrl}/users/specialization`,
      formData
    );
  }
}
