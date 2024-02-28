import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DiseaseResponse,
  DiseasesInterface,
  PaginatedDiseasesInterface,
} from '../../models/disease';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DiseaseServiceService {
  private http = inject(HttpClient);
  constructor() {}
  /*create new disease*/
  createDisease(disease: DiseasesInterface): Observable<DiseaseResponse> {
    const formData = new FormData();
    formData.append('description', disease.description);
    formData.append('name', disease.name);
    return this.http.post<DiseaseResponse>(
      `${environment.baseUrl}/diseases`,
      formData
    );
  }
  /*get all diseases*/
  getAllDiseases(catergory_reference: string): Observable<DiseaseResponse[]> {
    return this.http.get<DiseaseResponse[]>(`${environment.baseUrl}/diseases`, {
      params: { catergory_reference },
    });
  }
  /*delete disease by reference*/
  deleteDisease(reference: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/diseases/${reference}`
    );
  }

  /*get diseases catergory*/
  getDiseaseCategory(): Observable<DiseaseResponse[]> {
    return this.http.get<DiseaseResponse[]>(
      `${environment.baseUrl}/diseases/categories`
    );
  }
  /*create new disease catergory*/
  createDiseaseCatergory(
    disease: DiseasesInterface
  ): Observable<DiseaseResponse> {
    const formData = new FormData();
    formData.append('description', disease.description);
    formData.append('name', disease.name);
    return this.http.post<DiseaseResponse>(
      `${environment.baseUrl}/diseases`,
      formData
    );
  }

  /*delete disease catergory /diseases/categories/{reference}*/

  deleteDiseaseCatergory(reference: string): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/diseases/categories/${reference}`
    );
  }

  /**
   * /diseases/categories/links
   */

  createCategoryLink(
    catergory_reference: string,
    disease_reference: string
  ): Observable<DiseaseResponse> {
    const formData = new FormData();
    formData.append(' catergory_reference', catergory_reference);
    formData.append('disease_reference', disease_reference);
    return this.http.post<DiseaseResponse>(
      `${environment.baseUrl}/diseases/categories/links`,
      formData
    );
  }

  /**
   *delete catergorylink /diseases/categories/links
   */
  deleteCategoryLink(
    catergory_reference: string,
    disease_reference: string
  ): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/diseases/categories/links`,
      {
        params: { catergory_reference, disease_reference },
      }
    );
  }

  /*​/diseases​/categories​/paginated
   * get paginated catergory
   */

  getPaginatedCategory(
    page: number,
    size: number
  ): Observable<PaginatedDiseasesInterface> {
    return this.http.get<PaginatedDiseasesInterface>(
      `${environment.baseUrl}​/diseases​/categories​/paginated`,
      { params: { page, size } }
    );
  }

  /*​/diseases​/paginated
   * get paginated catergory
   */

  getPaginatedDiseases(
    page: number,
    size: number,
    catergory_reference: string
  ): Observable<PaginatedDiseasesInterface> {
    return this.http.get<PaginatedDiseasesInterface>(
      `${environment.baseUrl}​/diseases​/paginated`,
      { params: { page, size, catergory_reference } }
    );
  }
}
