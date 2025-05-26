import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import KeepAwake from 'react-native-keep-awake';

function App(): React.JSX.Element {
 useEffect(() => {
    KeepAwake.activate();
    return () => KeepAwake.deactivate();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
}


export default App;
