import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BottomHeader = () => {
  return (
    <View style={styles.bottomHeader}>
      <Text>BottomHeader</Text>
    </View>
  );
};

export default BottomHeader;

const styles = StyleSheet.create({
    bottomHeader:{
        // position:'absolute',
        // bottom:0,
    },
});
