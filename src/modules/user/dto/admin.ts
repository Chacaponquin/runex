export interface SignInAdminUserDTO {
  email: string;
  password: string;
}

export interface ResponseSignInAdminDTO {
  email: string;
  username: string;
  token: string;
  id: string;
}
