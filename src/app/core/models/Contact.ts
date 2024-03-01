import { ContactType } from "../constant/contactType";

export class Contact {
  id: number;
  reference: string;
  type: ContactType;
  value: string;
  verified: boolean;
  createdAt: string; // Format de date: 'yyyy-MM-dd HH:mm:ss'


  constructor(
    id: number = 0,
    reference: string = '',
    type: ContactType = ContactType.EMAIL,
    value: string = '',
    verified: boolean = false,
    createdAt: string = '',

  ) {
    this.id = id;
    this.reference = reference;
    this.type = type;
    this.value = value;
    this.verified = verified;
    this.createdAt = createdAt;
  }
  
}
