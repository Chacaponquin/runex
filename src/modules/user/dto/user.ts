export interface LoginUserDTO {
  email: string;
  password: string;
}

export interface SignUpUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface SendMessageDTO {
  fullName: string;
  email: string;
  message: string;
  user: string | null;
}

export interface RespUserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  favorites: Array<string>;
  accessToken: string;
  refreshToken: string;
}
