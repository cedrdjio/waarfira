import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Disease, DiseaseCategory } from '../models/disease';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root',
})
export class DiseaseService {
  constructor(private http: HttpClient) {}

  /*create new disease*/
  createDisease(name: string, description: string): Observable<Disease> {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('name', name);
    return this.http.post<Disease>(`${environment.baseUrl}/diseases`, formData);
  }

  /*get all diseases*/
  getAllDiseases(catergoryReference: string): Observable<Disease[]> {
    return this.http.get<Disease[]>(`${environment.baseUrl}/diseases`, {
      params: { catergoryReference },
    });
  }
  /*delete disease by reference*/
  deleteDisease(reference: string): Observable<Disease> {
    return this.http.delete<Disease>(
      `${environment.baseUrl}/diseases/${reference}`
    );
  }

  /*get diseases catergory*/
  getDiseaseCategory(): Observable<DiseaseCategory[]> {
    return this.http.get<DiseaseCategory[]>(
      `${environment.baseUrl}/diseases/categories`
    );
  }
  /*create new disease catergory*/
  createDiseaseCatergory(
    Category: DiseaseCategory
  ): Observable<DiseaseCategory> {
    const formData = new FormData();
    formData.append('description', Category.description);
    formData.append('name', Category.name);
    return this.http.post<DiseaseCategory>(
      `${environment.baseUrl}/diseases`,
      formData
    );
  }

  /*delete disease catergory /diseases/categories/{reference}*/

  deleteDiseaseCatergory(reference: string): Observable<DiseaseCategory> {
    return this.http.delete<DiseaseCategory>(
      `${environment.baseUrl}/diseases/categories/${reference}`
    );
  }

  /**
   * /diseases/categories/links
   */

  createCategoryLink(
    catergoryReference: string,
    diseaseReference: string
  ): Observable<Disease> {
    const formData = new FormData();
    formData.append(' catergory_reference', catergoryReference);
    formData.append('disease_reference', diseaseReference);
    return this.http.post<Disease>(
      `${environment.baseUrl}/diseases/categories/links`,
      formData
    );
  }

  /**
   *delete catergorylink /diseases/categories/links
   */
  deleteCategoryLink(
    catergoryReference: string,
    diseaseReference: string
  ): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseUrl}/diseases/categories/links`,
      {
        params: { catergoryReference, diseaseReference },
      }
    );
  }

  /*​/diseases​/categories​/paginated
   * get paginated catergory
   */

  getPaginatedCategory(
    page: number,
    size: number
  ): Observable<Page<DiseaseCategory>> {
    return this.http.get<Page<DiseaseCategory>>(
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
  ): Observable<Page<DiseaseCategory>> {
    return this.http.get<Page<DiseaseCategory>>(
      `${environment.baseUrl}​/diseases​/paginated`,
      { params: { page, size, catergory_reference } }
    );
  }
}
