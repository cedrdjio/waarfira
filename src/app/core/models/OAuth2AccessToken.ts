export class OAuth2AccessToken {
   accessToken: string;
   tokenType: string;
   refreshToken: string;
   expiresIn: number;
   scope: string;


  constructor(
    accessToken: string = '',
    tokenType: string = '',
    refreshToken: string = '',
    expiresIn: number = 0,
    scope: string = ''
  ) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.refreshToken = refreshToken;
    this.expiresIn = expiresIn;
    this.refreshToken = refreshToken;
    this.scope = scope;
  }
}
