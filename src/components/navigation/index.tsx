// import React from 'react';

// const index = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default index;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
// import HomeScreen from '../screens/HomeScreen';
// import ChatScreen from '../screens/ChatScreen';
// import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: { chatId: string };
  Login: undefined;
  register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} /> */}
    </Stack.Navigator>
  );
}
