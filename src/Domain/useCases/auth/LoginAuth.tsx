import { AuthRepositoryImpl } from '../../../Data/repository/AuthRepository';

const { login } = new AuthRepositoryImpl();

export const LoginAuthUseCase = async (email: string, password: string) => {
  return await login(email, password);
};
