import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { ROUTES } from '../../constants/routes';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation.types';

const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp<typeof ROUTES.REGISTER>>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    // এখানে আপনি API কল করতে পারেন
    console.log('Registering with:', { name, email, password });
    Alert.alert('Success', 'Registered successfully!');
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#666"
        keyboardType="default"
        autoCapitalize="none"
        value={name}
        onChangeText={setName}
      />
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

      <Text style={styles.changeToLogin}>
        Don't have an account?&nbsp;
        <Text onPress={() => navigation.navigate(ROUTES.LOGIN)} style={styles.changeToLoginUpBtn}>Sign In</Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    experimental_backgroundImage:
            'lbackground-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  // /////////////////////////////////////////
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
  // //////////////////////////////////////////
  changeToLogin: {
    marginTop: 15,
  },
  changeToLoginUpBtn: {
    color: 'purple',
    fontWeight: 600,
  },
});

