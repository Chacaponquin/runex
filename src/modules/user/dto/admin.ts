export interface SignInAdminUserDTO {
  username: string;
  password: string;
}

export interface ResponseSignInAdminDTO {
  email: string;
  username: string;
  accessToken: string;
  id: string;
}
