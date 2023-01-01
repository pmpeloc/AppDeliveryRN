import { AxiosError } from 'axios';
import { ImagePickerAsset } from 'expo-image-picker';
import mime from 'mime';

import { User } from '../../Domain/entity/User';
import { AuthRepository } from '../../Domain/repository/AuthRepository';
import {
  ApiDelivery,
  ApiDeliveryForImage,
} from '../sources/remote/api/ApiDelivery';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';

export class AuthRepositoryImpl implements AuthRepository {
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

  async registerWithImage(
    user: User,
    file: ImagePickerAsset
  ): Promise<ResponseAPIDelivery> {
    try {
      let data = new FormData();
      mime;
      data.append('image', {
        // @ts-ignore
        uri: file.uri,
        name: file.uri.split('/').pop()!,
        type: mime.getType(file.uri)!,
      });
      data.append('user', JSON.stringify(user));
      const response = await ApiDeliveryForImage.post<ResponseAPIDelivery>(
        '/users/createWithImage',
        data
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
