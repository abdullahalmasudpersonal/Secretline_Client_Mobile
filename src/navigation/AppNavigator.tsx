import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import { useAppSelector } from '../redux/hooks';
import { selectCurrentUser } from '../redux/features/auth/authSelectors';
import ChatScreen from '../screens/chat/ChatScreen';
import ChatRoomScreen from '../screens/chat/ChatRoomScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  //  const isLoggedIn = useAppSelector((state: RootState) => state.auth.isLoggedIn);
  const user = useAppSelector(selectCurrentUser);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="ChatList" component={ChatScreen} />
          <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
