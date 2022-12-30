import { useState } from 'react';

import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      const response = await RegisterAuthUseCase(values);
      console.log(JSON.stringify(response));
    }
  };

  const isValidForm = (): boolean => {
    if (values.name.trim() === '') {
      setErrorMessage('Ingresa tu nombre');
      return false;
    }
    if (values.name.trim() === '') {
      setErrorMessage('Ingresa tu nombre');
      return false;
    }
    if (values.lastname.trim() === '') {
      setErrorMessage('Ingresa tu apellido');
      return false;
    }
    if (values.email.trim() === '') {
      setErrorMessage('Ingresa tu email');
      return false;
    }
    if (values.phone.trim() === '') {
      setErrorMessage('Ingresa tu telefono');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Ingresa tu contraseña');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('Ingresa tu confirmación de la contraseña');
      return false;
    }
    if (values.password !== values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }
    return true;
  };

  return {
    ...values,
    errorMessage,
    onChange,
    register,
  };
};

export default RegisterViewModel;
