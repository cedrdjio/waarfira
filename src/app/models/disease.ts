export interface DiseaseResponse {
  createdAt: {};
  description: string;
  id: number;
  name: string;
  reference: string;
}

export interface DiseasesInterface {
  description: string;
  name: string;
}

export interface PaginatedDiseasesInterface {
  content: Content[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  size: number;
  sort: Sort2;
  totalElements: number;
  totalPages: number;
}

export interface Content {
  createdAt: CreatedAt;
  description: string;
  id: number;
  name: string;
  reference: string;
}

export interface CreatedAt {}

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  sort: Sort;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
