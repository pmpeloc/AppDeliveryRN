import { AxiosError } from 'axios';

import { User } from '../../Domain/entity/User';
import { AuthRepository } from '../../Domain/repository/AuthRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';

export class AuthRepositoryImpl implements AuthRepository {
  async register(user: User): Promise<ResponseAPIDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseAPIDelivery>(
        '/users/create',
        user
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log(JSON.stringify(e.response?.data));
      const apiError: ResponseAPIDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }

  async login(email: string, password: string): Promise<ResponseAPIDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseAPIDelivery>(
        '/users/login',
        { email, password }
      );
      return Promise.resolve(response.data);
    } catch (error) {
      let e = error as AxiosError;
      console.log(JSON.stringify(e.response?.data));
      const apiError: ResponseAPIDelivery = JSON.parse(
        JSON.stringify(e.response?.data)
      );
      return Promise.resolve(apiError);
    }
  }
}
