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
