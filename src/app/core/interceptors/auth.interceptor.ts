import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { environment } from "../../../environments/environment";
const baseUrl = environment.baseUrl;
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Récupération du token d'accès depuis le localStorage
    if (this.authService.getAccessToken()) {
      const accessToken: string = this.authService.getAccessToken().accessToken;

      // Exclure les requêtes de connexion et d'inscription de l'autorisation
      if (request.url.includes('/users/login') || request.url.includes('/users/register')) {
        return next.handle(request);
      }
      // Exclure les requêtes de connexion et d'inscription de l'autorisation
      if (request.url.includes('/users/contacts/resend-code')) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`,
            Accepts: `Appication/json`
          }
        });
        return next.handle(request)
      }
      // Ajouter l'en-tête d'autorisation avec le token si présent
      if (accessToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${accessToken}`
          }
        });
      }
    }



    return next.handle(request);
  }
}
