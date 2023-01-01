import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

// import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import { RegisterWithImageAuthUseCase } from '../../../Domain/useCases/auth/RegisterWithImageAuth';

const RegisterViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
    image: '',
    password: '',
    confirmPassword: '',
  });
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    if (isValidForm()) {
      // const response = await RegisterAuthUseCase(values);
      const response = await RegisterWithImageAuthUseCase(values, file!);
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
    if (values.image === '') {
      setErrorMessage('Seleccione una imagen');
      return false;
    }
    return true;
  };

  return {
    ...values,
    errorMessage,
    onChange,
    register,
    pickImage,
    takePhoto,
  };
};

export default RegisterViewModel;
