import * as ImagePicker from 'expo-image-picker';

import { AuthRepositoryImpl } from '../../../Data/repository/AuthRepository';
import { User } from '../../entity/User';

const { registerWithImage } = new AuthRepositoryImpl();

export const RegisterWithImageAuthUseCase = async (
  user: User,
  file: ImagePicker.ImagePickerAsset
) => {
  return await registerWithImage(user, file);
};
