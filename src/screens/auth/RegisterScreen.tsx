import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>

      <Text style={styles.changeToLogin}>
        Don't have an account?&nbsp;
        {/* <TouchableOpacity > */}
        <Text onPress={() => navigation.navigate(ROUTES.REGISTER)} style={styles.changeToLoginUpBtn}>Sign up</Text>
        {/* </TouchableOpacity> */}
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
    // paddingHorizontal: 30,
    backgroundColor: 'hotpink',
  },
  changeToLogin: {
    marginTop: 15,
  },
  changeToLoginUpBtn: {
    color: 'purple',
    fontWeight: 600,
  },
});

