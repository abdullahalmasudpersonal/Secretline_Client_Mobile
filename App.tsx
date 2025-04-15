import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import image from './src/assets/logo/logoWithoutBackground.png';

function App(): React.JSX.Element {
  return (
    <View>
      <ScrollView>
        <View>
          <Text>Welcome to Secretline</Text>
          <Image src={image} />
        </View>
      </ScrollView>
    </View>
  );
}

export default App;
