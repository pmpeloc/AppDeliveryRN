import { DeleteUserLocalUseCase } from '../../../../Domain/useCases/userLocal/DeleteUserLocal';

const ProfileInfoViewModel = () => {
  const deleteSession = async () => {
    await DeleteUserLocalUseCase();
  };

  return {
    deleteSession,
  };
};

export default ProfileInfoViewModel;
