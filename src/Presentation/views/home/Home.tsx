import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import {
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { RootStackParamList } from '../../../../App';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from './ViewModel';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList, 'HomeScreen'> {}

export const HomeScreen = ({ navigation }: Props) => {
  const { email, password, user, errorMessage, onChange, login } =
    useViewModel();

  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
      navigation.replace('ProfileInfoScreen');
    }
  }, [user]);

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
          <RoundedButton text='LOGIN' onPress={() => login()} />
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
