import { UserLocalRepositoryImp } from '../../../Data/repository/UserLocalRepository';

const { getUser } = new UserLocalRepositoryImp();

export const GetUserLocalUseCase = async () => {
  return await getUser();
};
