import { UserLocalRepositoryImp } from '../../../Data/repository/UserLocalRepository';
import { User } from '../../entity/User';

const { save } = new UserLocalRepositoryImp();

export const SaveUserLocalUseCase = async (user: User) => {
  return await save(user);
};
