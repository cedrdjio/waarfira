import { Gender } from "../constant/gender";
import { Language } from "../constant/language";
import { RegistrationStep } from "../constant/registrationStep";
import { Status } from "../constant/status";
import { Doctor } from "./doctor";
import { Contact } from "./contact";
import { Coordinate } from "./coordinate";
import { Patient } from "./patient";

// export interface User {
//   id: number = 0;
//   avatar: string = '';
//   reference: string = '';
//   login: string = '';
//   lastName: string = '';
//   firstName: string = '';
//   gender: Gender = Gender.NONE;
//   birthdate: string = '';
//   contacts: Contact[] = [];
//   createdAt: string = ''; // Format de date: 'yyyy-MM-dd HH:mm:ss'
//   language: Language = Language.EN;
//   registrationStep: RegistrationStep = RegistrationStep.RAW_USER;
//   status: Status = Status.PROCESSING;

//   constructor(data: Partial<User> = {}) {
//       Object.assign(this, data);
//   }
// }
export class  User {
  avatar: string = '';
  birthdate: string= ''; // Assuming it's a string in format 'yyyy-MM-dd'
  contacts: Contact[] = [];
  coordinate!: Coordinate ;
  createdAt: string = '';
  doctor!: Doctor;
  firstName: string = '' ;
  gender: 'FEMALE' | 'MALE' | 'NONE' = 'NONE';
  id: string = '';
  language: 'EN' | 'FR'= 'FR';
  lastName: string = '';
  login: string = '';
  patient!: Patient ;
  reference: string = '';
  isInitialized : any;
   registrationStep: 'COMPLETED' | 'CONFIRMED' | 'RAW_USER' | 'SPECIALIZED' = 'RAW_USER';
  status: 'ACTIVE' | 'PROCESSING' | 'SUSPENDED' = 'PROCESSING';
  type: 'ADMIN' | 'AGENT' | 'DOCTOR' | 'NONE' | 'PATIENT'= 'PATIENT';

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
}
}










