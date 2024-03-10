import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../services/auth/auth.service";
import { environment } from "../../../environments/environment";

const baseUrl = environment.baseUrl;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Obtenir le token d'accès
    let accessToken = this.authService.getAccessToken().access_token
    // Si l'URL inclut '/users/login' ou '/users/register', ignorer l'ajout d'en-têtes
    if (request.url.includes('/users/login')) {
      return next.handle(request);
    }

    if (request.method === 'POST' && request.url.endsWith('/users')) {
      return next.handle(request);
    }

    // Si aucun token d'accès n'est trouvé, retourner une erreur
    if (accessToken == '') {
      return throwError('Aucun token d\'accès trouvé');
    }

    // Cloner la requête et ajouter l'en-tête d'autorisation
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    // Continuer la chaîne de requêtes avec la requête modifiée
    return next.handle(modifiedRequest);
  }
}
