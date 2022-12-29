import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';

export const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../../assets/logo.png')}
        />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require('../../../../assets/email.png')}
          placeholder='Correo electrónico'
          value={email}
          keyboardType='email-address'
          property='email'
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
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text='LOGIN'
            onPress={() => console.log({ email, password })}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>No tienes cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
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
    height: '40%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
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
    alignSelf: 'center',
    top: '15%',
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
