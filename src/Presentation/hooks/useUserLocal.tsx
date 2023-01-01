import { useEffect, useState } from 'react';

import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal';
import { User } from '../../Domain/entity/User';

export const useUserLocal = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUserSession();
  }, []);

  const getUserSession = async () => {
    const user = await GetUserLocalUseCase();
    setUser(user);
  };

  return {
    user,
    getUserSession,
  };
};
