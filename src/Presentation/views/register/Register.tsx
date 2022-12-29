import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';

import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import useViewModel from './ViewModel';

export const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    onChange,
    register,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../../assets/user_image.png')}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <CustomTextInput
          image={require('../../../../assets/user.png')}
          placeholder='Nombres'
          value={name}
          keyboardType='default'
          property='name'
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require('../../../../assets/my_user.png')}
          placeholder='Apellidos'
          value={lastname}
          keyboardType='default'
          property='lastname'
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electrónico'
          value={email}
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require('../../../../assets/phone.png')}
          placeholder='Teléfono'
          value={phone}
          keyboardType='phone-pad'
          property='phone'
          onChangeText={onChange}
        />
        <CustomTextInput
          image={require('../../../../assets/password.png')}
          placeholder='Contraseña'
          value={password}
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          secureTextEntry={true}
        />
        <CustomTextInput
          image={require('../../../../assets/confirm_password.png')}
          placeholder='Confirmar contraseña'
          value={confirmPassword}
          keyboardType='default'
          property='confirmPassword'
          onChangeText={onChange}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='CONFIRMAR' onPress={() => register()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    marginLeft: 15,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: MyColors.primary,
    borderBottomWidth: 1,
    borderBottomColor: MyColors.primary,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    top: '5%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
