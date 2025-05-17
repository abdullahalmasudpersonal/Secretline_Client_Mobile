import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
// import AuthNavigator from './AuthNavigator';
// import ChatListScreen from '../screens/Chat/ChatListScreen';
// import ChatRoomScreen from '../screens/Chat/ChatRoomScreen';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
//   const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Auth" component={AuthNavigator} />
      {/* {isLoggedIn ? (
        <>
          <Stack.Screen name="ChatList" component={ChatListScreen} />
          <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}  */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
