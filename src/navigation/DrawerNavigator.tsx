import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import ChatScreen from '../screens/chat/ChatScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
     <Drawer.Navigator initialRouteName="ChatList">
        {/* <Text>Abdullah</Text> */}
      <Drawer.Screen name="ChatList" component={ChatScreen} />
      {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

// const styles = StyleSheet.create({});
