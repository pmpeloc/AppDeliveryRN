import * as ImagePicker from 'expo-image-picker';

import { User } from '../entity/User';
import { ResponseAPIDelivery } from '../../Data/sources/remote/models/ResponseApiDelivery';

export interface AuthRepository {
  login(email: string, password: string): Promise<ResponseAPIDelivery>;
  register(user: User): Promise<ResponseAPIDelivery>;
  registerWithImage(
    user: User,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseAPIDelivery>;
}
