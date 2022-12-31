export interface User {
  id?: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  session_token?: string;
}
