import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor="#30333d" barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.maniAtitleView}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Icon name="menu" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Secretline</Text>
        </View>
        {/* <Icon name="menu" size={30} color="white" />
         <Text style={styles.title}>Secretline</Text> */}
        <Icon name="more-vert" size={30} color="white" />
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    backgroundColor: '#30333d',
    // backgroundColor: 'gray',
    height: 57,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  maniAtitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 20,
  },
});

