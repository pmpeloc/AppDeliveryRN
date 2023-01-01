import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import { CustomTextInput } from '../../components/CustomTextInput';

import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './ViewModel';
import styles from './Styles';
import { ModalPickImage } from '../../components/ModalPickImage';

export const RegisterScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    image,
    errorMessage,
    onChange,
    register,
    pickImage,
    takePhoto,
  } = useViewModel();

  useEffect(() => {
    if (errorMessage !== '') {
      ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }
  }, [errorMessage]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('../../../../assets/chef.jpg')}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          {image === '' ? (
            <Image
              style={styles.logoImage}
              source={require('../../../../assets/user_image.png')}
            />
          ) : (
            <Image style={styles.logoImage} source={{ uri: image }} />
          )}
        </TouchableOpacity>
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <ScrollView>
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
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        modalUseState={modalVisible}
        setModalUseState={setModalVisible}
      />
    </View>
  );
};
