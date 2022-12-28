import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        source={require('./assets/chef.jpg')}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require('./assets/logo.png')} />
        <Text style={styles.logoText}>FOOD APP</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require('./assets/email.png')}
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
            source={require('./assets/password.png')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            title='ENTRAR'
            onPress={() => ToastAndroid.show('CLICK', ToastAndroid.LONG)}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>No tienes cuenta?</Text>
          <Text style={styles.formRegisterText}>Registrate</Text>
        </View>
      </View>
    </View>
  );
}

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
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
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
