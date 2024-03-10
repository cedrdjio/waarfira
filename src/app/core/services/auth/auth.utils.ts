import { Injectable } from "@angular/core";
import { OAuth2AccessToken } from "../../models/OAuth2AccessToken";


@Injectable({ providedIn: 'root' })
export class AuthUtils {
  static isTokenExpired(token: OAuth2AccessToken): boolean {
    if (!token || !token.expires_date) {
      return true;
    }
    const expirationDate = new Date(token.expires_date);
    const currentDate = new Date();
    return expirationDate.valueOf() <= currentDate.valueOf();
  }
  calculateExpirationDate(secondsToAdd: number): Date {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getTime() + (secondsToAdd * 1000));
    return expirationDate;
  }
}
