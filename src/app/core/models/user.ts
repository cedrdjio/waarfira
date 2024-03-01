import { Gender } from "../constant/gender";
import { Language } from "../constant/language";
import { RegistrationStep } from "../constant/registrationStep";
import { Status } from "../constant/status";
import { Contact } from "./Contact";

export class User {
  id: number = 0;
  avatar: string = '';
  reference: string = '';
  login: string = '';
  lastName: string = '';
  firstName: string = '';
  gender: Gender = Gender.NONE;
  birthdate: string = '';
  contacts: Contact[] = [];
  createdAt: string = ''; // Format de date: 'yyyy-MM-dd HH:mm:ss'
  language: Language = Language.EN;
  registrationStep: RegistrationStep = RegistrationStep.RAW_USER;
  status: Status = Status.PROCESSING;

  constructor(data: Partial<User> = {}) {
      Object.assign(this, data);
  }
}
