export interface CurrentUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: string[];
}

export interface CurrentAdminUser {
  id: string;
  email: string;
  username: string;
}
