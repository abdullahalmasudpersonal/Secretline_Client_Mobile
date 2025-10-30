import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from '../screens/chat/ChatScreen';
// import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
     <Drawer.Navigator /* initialRouteName="ChatList" */ screenOptions={{ headerShown: true }}>
      {/* <Text>mass</Text> */}
      <Drawer.Screen name="ChatList" component={ChatScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

// const styles = StyleSheet.create({});
