
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // এখানে লগইন প্রক্রিয়া পরিচালনা করো (API call, validation, etc.)
  };

  return (
    <View style={styles.login}>
      <ScrollView contentContainerStyle={styles.loginScrollView} >
        <View style={styles.loginView}>
          <Image
            source={require('../../assets/logo/logoWithoutBackground.png')}
            style={styles.loginLogoImage}
          />

          <Text
            style={styles.loginWelcomeText}>
            Welcome back.s
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.forgetBtn}>
            Forget password?
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.changeToSingUp}>
            Don't have an account?
            <Text style={styles.changeToSingUpBtn}> Sign up</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  login: {
    flex: 1,
    experimental_backgroundImage:
      'lbackground-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  loginScrollView: {
    flexGrow: 1,
  },
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginLogoImage: {
    width: 200,
    height: 150,
  },
  loginWelcomeText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  forgetBtn: {
    marginRight: -180,
    marginTop: -10,
    color: 'red',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  changeToSingUp: {
    marginTop: 15,
  },
  changeToSingUpBtn: {
    color: 'purple',
    fontWeight: 600,
  },
});
export default Login;
