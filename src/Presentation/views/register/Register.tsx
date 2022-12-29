import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ToastAndroid,
  StyleSheet,
} from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { MyColors } from '../../theme/AppTheme';

export const RegisterScreen = () => {
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
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Nombres'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/my_user.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Apellidos'
            keyboardType='default'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/email.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Correo electrónico'
            keyboardType='email-address'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/phone.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Teléfono'
            keyboardType='phone-pad'
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('../../../../assets/confirm_password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Confirmar contraseña'
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text='CONFIRMAR'
            onPress={() => ToastAndroid.show('Hello', ToastAndroid.SHORT)}
          />
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
