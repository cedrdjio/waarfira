export interface User {
  username: string;
  password: string;
}

export interface AccessToken {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: null;
  scope: string;
}

export interface UpdatedUser {
  avatar: string;
  birthday: string;
  email: string;
  first_name: string;
  last_name: string;
  gender: string;
  telephone: string;
}

export interface UpdateUsersResponse {
  avatar: string;
  birthdate: string;
  contacts: Contact[];
  createdAt: CreatedAt2;
  firstName: string;
  gender: string;
  id: number;
  language: string;
  lastName: string;
  login: string;
  reference: string;
  registrationStep: string;
  status: string;
}

export interface Contact {
  createdAt: CreatedAt;
  id: number;
  reference: string;
  type: string;
  value: string;
  verified: boolean;
}

export interface CreatedAt {}
export interface CreatedAt2 {}
