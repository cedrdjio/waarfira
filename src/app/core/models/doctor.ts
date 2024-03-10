import { Category } from "./category";

export interface Doctor {
  approved: boolean;
  createdAt: string; // Format de date: 'yyyy-MM-dd HH:mm:ss'
  id: number;
  lastServiceLocation: string;
  reference: string;
  specializations: Category[];
  yearsOfExperience: number;
}
