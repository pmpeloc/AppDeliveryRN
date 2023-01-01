import { UserLocalRepositoryImp } from '../../../Data/repository/UserLocalRepository';

const { deleteUser } = new UserLocalRepositoryImp();

export const DeleteUserLocalUseCase = async () => {
  return await deleteUser();
};
