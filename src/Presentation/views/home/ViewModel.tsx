import { useState } from 'react';

import { LoginAuthUseCase } from '../../../Domain/useCases/auth/LoginAuth';
import { SaveUserLocalUseCase } from '../../../Domain/useCases/userLocal/SaveUserLocal';
import { useUserLocal } from '../../hooks/useUserLocal';

const HomeViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { user, getUserSession } = useUserLocal();

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const login = async () => {
    if (isValidForm()) {
      const response = await LoginAuthUseCase(values.email, values.password);
      console.log(JSON.stringify(response));
      if (!response.success) {
        setErrorMessage(response.message);
      } else {
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      }
    }
  };

  const isValidForm = (): boolean => {
    if (values.email.trim() === '') {
      setErrorMessage('Ingresa tu email');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa tu contraseña');
      return false;
    }
    return true;
  };

  return {
    ...values,
    user,
    errorMessage,
    onChange,
    login,
  };
};

export default HomeViewModel;
