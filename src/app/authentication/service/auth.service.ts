import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { OAuth2AccessToken } from '../model/OAuth2AccessToken';
import { environment } from '../../../environments/environment';
const baseUrl = environment.baseUrl;

@Injectable({ providedIn: 'root' })
export class AuthService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
  private _httpClient = inject(HttpClient);

  /**
  * Setter pour stocker le token d'accès dans le localStorage du navigateur.
  * @param token Le token d'accès à sauvegarder.
  */
  setAccessToken(token: OAuth2AccessToken) {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }

  /**
   * Getter pour récupérer le token d'accès depuis le localStorage du navigateur.
   * Si aucun token n'est trouvé, null est retourné.
   * @returns Le token d'accès récupéré, ou null si aucun token n'est trouvé.
   */
  getAccessToken(): OAuth2AccessToken {
    const tokenString = localStorage.getItem('accessToken');
    return tokenString ? JSON.parse(tokenString) : null;
  }
  /**
     * Méthode pour effectuer l'enregistrement de l'utilisateur.
     * @param username Le nom d'utilisateur.
     * @param password Le mot de passe.
     * @returns Un Observable contenant la réponse de la requête d'authentification.
     */
  register(username: string, password: string): Observable<OAuth2AccessToken> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this._httpClient.post<OAuth2AccessToken>(`${baseUrl}/users`, formData);
  }
  /**
   * Méthode de connexion de l'utilisateur.
   * @param username Le nom d'utilisateur.
   * @param password Le mot de passe.
   * @returns Un Observable contenant la réponse de la requête de connexion.
   */
  login(username: string, password: string): Observable<OAuth2AccessToken> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this._httpClient.post<OAuth2AccessToken>(`${baseUrl}/users/login`,formData);
  }
  /**
    * Met à jour la spécialisation ou le rôle de l'utilisateur.
    * @param specialization La spécialisation à définir pour l'utilisateur (ADMIN, DOCTOR, PATIENT, etc.).
    * @param accessToken Le token d'accès JWT pour l'authentification.
    * @returns Un Observable contenant la réponse de la requête de mise à jour.
    */
  updateUserSpecialization(specialization: string): Observable<any> {
    const formData = new FormData();
    formData.append('specialization', specialization);
    return this._httpClient.put<any>(`${baseUrl}/users/specialization`, formData);
  }

  /**
   * Méthode de déconnexion de l'utilisateur.
   * @param accessToken Le token d'accès JWT pour l'authentification.
   * @returns Un Observable contenant la réponse de la requête de déconnexion.
   */
  logout(): Observable<any> {
    // Remove the access token from the local storage
    localStorage.removeItem('accessToken');
    // Return the observable
    return of(true);
  }

  /**
  * Envoie un code de confirmation de mail à l'utilisateur.
  * @param accessToken Le token d'accès JWT pour l'authentification.
  * @returns Un Observable contenant la réponse de la requête d'envoi du code de confirmation.
  */
  sendConfirmationCode(): Observable<any> {
    // Envoi de la requête HTTP GET pour envoyer le code de confirmation
    return this._httpClient.get<any>('/users/contacts/resend-code');
  }

  /**
   * Vérifie le code de confirmation de mail envoyé à l'utilisateur.
   * @param code Le code de confirmation à vérifier.
   * @param accessToken Le token d'accès JWT pour l'authentification.
   * @returns Un Observable contenant la réponse de la requête de vérification du code de confirmation.
   */
  verifyConfirmationCode(code: string, accessToken: string): Observable<any> {
    // Préparation des paramètres de requête avec le code de confirmation
    const params = { code };
    // Envoi de la requête HTTP POST pour vérifier le code de confirmation
    return this._httpClient.post<any>('/users/contacts/verify', null);
  }

  /**
   * Modifie les informations de l'utilisateur.
   * @param data Les nouvelles informations de l'utilisateur (au format FormData).
   * @param accessToken Le token d'accès JWT pour l'authentification.
   * @returns Un Observable contenant la réponse de la requête de modification des informations de l'utilisateur.
   */
  updateUser(data: FormData, accessToken: string): Observable<any> {

    return this._httpClient.put<any>('/users', data);
  }
  /**
     * Confirme le code de récupération de mot de passe.
     * @param code Le code de récupération de mot de passe à confirmer.
     * @returns Un Observable contenant la réponse de la requête de confirmation du code.
     */
  confirmForgotPasswordCode(code: string): Observable<any> {
    return this._httpClient.post<any>(`users/forgot-password/confirm-code?code=${code}`, null);
  }

  /**
   * Envoie un code de récupération de mot de passe à l'utilisateur.
   * @param username Le nom d'utilisateur pour lequel envoyer le code de récupération de mot de passe.
   * @returns Un Observable contenant la réponse de la requête d'envoi du code.
   */
  sendForgotPasswordCode(username: string): Observable<any> {
    return this._httpClient.post<any>(`users/forgot-password/send-code?username=${username}`, null);
  }

  /**
   * Crée un nouveau mot de passe en utilisant le code de récupération de mot de passe.
   * @param code Le code de récupération de mot de passe.
   * @param newPassword Le nouveau mot de passe à définir.
   * @returns Un Observable contenant la réponse de la requête de création du nouveau mot de passe.
   */
  createNewPassword(code: string, newPassword: string): Observable<any> {
    return this._httpClient.post<any>(`users/forgot-password?code=${code}&password=${newPassword}`, null);
  }
  /**
   * Récupère les informations de l'utilisateur connecté.
   * @param accessToken Le token d'accès JWT pour l'authentification.
   * @returns Un Observable contenant les informations de l'utilisateur connecté.
   */
  getLoggedInUser(): Observable<any> {
    return this._httpClient.get<any>('/users/me');
  }

}
