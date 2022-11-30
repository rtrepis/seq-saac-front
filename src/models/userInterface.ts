export interface NamePasswordUserData {
  userName: string;
  password: string;
}

export interface UserLogged {
  id: string;
  userName: string;
  token: string;
}

export interface PasswordCodeData {
  password: string;
  code?: string;
}
