import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
// import Login from './src/pages/login/Login';
// import Register from './src/pages/login/Register';

function App(): React.JSX.Element {
  return (
    <>
    {/* <Login/> */}
    {/* <Register/> */}
    {/* <View>
     <Text>lksdj</Text>
    </View> */}
     <NavigationContainer>
      <AppNavigator />
     </NavigationContainer>
    </>
  );
}


export default App;
